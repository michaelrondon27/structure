import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl } from '@angular/forms';

// Auto Destroy
import { AutoDestroy } from '@shared/auto-destroy/auto-destroy.service';
import { takeUntil } from 'rxjs';

// Next code was made following the next post about hot to manage formControlName inside components
// https://stackoverflow.com/questions/39661430/angular-2-formcontrolname-inside-component
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent)
};

@Component({
    selector: 'fundae-textarea',
    templateUrl: 'textarea.component.html',
    styleUrls: [
        'textarea.component.scss'
    ],
    providers: [
        CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
    ]
})

export class TextareaComponent extends AutoDestroy implements ControlValueAccessor, AfterViewInit, OnInit {
    // Input count for id and label "for", increase by 1 when instance a new TextareaComponent, to avoid passing always de inputId prop
    static inputCount: number = 0;

    public errors    : string[] = [];
    public innerValue: any = '';
    public hide      : boolean;

    private touched: boolean = false;

    @Input() public autofocus      : boolean;
    @Input() public control        : AbstractControl<any, any>;
    @Input() public defaultValue   : any;
    @Input() public disabled       : boolean;
    @Input() public formControlName: string;
    @Input() public inputId        : string = `textarea-${TextareaComponent.inputCount}`;
    @Input() public maxHeight      : number;
    @Input() public maxLength      : number;
    @Input() public noLabel        : boolean | string = false;
    @Input() public placeholder    : string = '';
    @Input() public readonly       : boolean;
    @Input() public required       : boolean | string = false;
    @Input() public rows           : number = 5;
    @Input() public title          : string;

    @ViewChild('input', { static: true }) inputRef: ElementRef;

    constructor(
        private cdr: ChangeDetectorRef
    ) {
        super();
    }

    ngOnInit(): void {
        this.innerValue = this.control?.value || this.innerValue;
        this.noLabel = this.noLabel === '' || this.noLabel;
        this.placeholder = this.placeholder ?? '';

        TextareaComponent.inputCount = TextareaComponent.inputCount + 1;

        if (this.required === '') {
            this.required = true;
        }

        this.control?.statusChanges.pipe(
            takeUntil(this.destroyed$)
        ).subscribe(status => {
            this.markAsTouched();

            if (status === 'INVALID' && this.control?.touched) {
                this.manageErrors();
            }
        });

        this.cdr.detectChanges();
    }

    ngAfterViewInit(): void {
        if (this.defaultValue) {
            this.innerValue = this.defaultValue;
        }

        this.cdr.detectChanges();
    }

    get value(): any {
        return this.innerValue;
    }

    set value(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    /**
     * We loop into an array of errors and add the validation messages to show in the template
     */
    manageErrors = () => {
        this.errors = [];

        for (const key in this.control.errors) {
            if (this.control.errors.hasOwnProperty(key)) {
                switch (key) {
                    case 'required':
                        this.errors.push('field_required');
                        break;
                    case 'maxlength':
                        this.errors.push('exceeded_max_lenght');
                        break;
                    default:
                        this.errors.push(this.control.errors[key]);
                }
            }
        }
    }

    /**
     * Function to set the touched of the control to true
     */
    private markAsTouched(): void{
        if(!this.touched){
          this.touched = true;
          this.onTouched();
        }
    }

    // Event fired when input value is changed. later propagated up to the form control using the custom value accessor interface
    onChange(event: Event, value: any): void {
        this.innerValue = value;
        this.propagateChange(this.innerValue);
        this.manageErrors();
    }

    /**
     * Function to set onTouched of the control
     */
    onTouched: any = () => {};

    /**
     * Function that will propagate the changes into de custom form control
     * @param _ It will be a function mainly, now coming after registerOnChange
     */
    propagateChange = (_: any) => {
    };

    /**
     * registerOnChange
     * @param fn
     */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /**
     * registerOnTouched
     * @param fn
     */
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    /**
     * From ControlValueAccessor interface
     * obj
     */
    writeValue(value: any): void {
        this.inputRef.nativeElement.value = value;
    }

}
