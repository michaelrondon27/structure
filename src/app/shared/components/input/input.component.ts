import { AfterContentInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, forwardRef } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl, FormControlStatus, NG_VALUE_ACCESSOR } from '@angular/forms';
import { takeUntil } from 'rxjs';

// Auto Destroy
import { AutoDestroy } from '@shared/auto-destroy/auto-destroy.service';

// Interfaces
import { Icon } from '@shared/interfaces/icon.interface';

// Next code was made following the next post aobut how to manage formControlName inside components
// https://stackoverflow.com/questions/39661430/angular-2-formcontrolname-inside-component
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent)
}

type AppearanceType = 'classic' | 'outline';

type InputType = 'number' | 'password' | 'text';

@Component({
    selector: 'fundae-input',
    templateUrl: 'input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class InputComponent extends AutoDestroy implements OnInit, AfterContentInit {

    // Input count for id and label "for", increase by 1 when instance a new InputComponent, to avoid passing always the inputId prop
    static inputCount: number = 0;

    public errors: string[] = [];
    public innerValue: any = '';

    private decimalMark: string = ',';
    private htmlElement?: HTMLInputElement;
    private previousValue: any;

    @Input() addon: any;
    @Input() appearence: AppearanceType = 'classic';
    @Input() autoFocus: boolean | string = false;
    @Input() control: FormControl = new FormControl();
    @Input() decimalsNumber: number = 2;
    @Input() defaultValue: any;
    @Input() disabled: boolean = false;
    @Input() formatNumber: boolean = true;
    @Input() formControlName?: string;
    @Input() iconsColor: string = '#CECECE';
    @Input() inputId: string = `input-${ InputComponent.inputCount }`;
    @Input() inputType: InputType = 'text';
    @Input() max?: number;
    @Input() min?: number;
    @Input() noLabel: boolean | string = false;
    @Input() outlineText?: string;
    @Input() placeholder?: string;
    @Input() prefixIcon?: Icon;
    @Input() readonly: boolean = false;
    @Input() required: boolean | string = false;
    @Input() step?: number;
    @Input() suffixIcon?: Icon;
    @Input() title?: string;

    @Output() suffixClick: EventEmitter<void> = new EventEmitter<void>();

    @ViewChild('input', { static: true }) inputRef?: ElementRef;

    constructor(
        private decimalPipe: DecimalPipe
    ) {
        super();
        InputComponent.inputCount = InputComponent.inputCount + 1;
    }

    ngOnInit(): void {
        this.innerValue = this.control.value || this.innerValue;
        this.title = this.title || this.outlineText;
        this.autoFocus = this.autoFocus === '' || this.autoFocus;
        this.noLabel = this.noLabel === '' || this.noLabel;

        this.htmlElement = this.inputRef?.nativeElement;
        this.htmlElement!.value = this.control ? this.control.value : this.innerValue;

        this.control.statusChanges.pipe(
            takeUntil(this.destroyed$)
        ).subscribe((status: FormControlStatus) => {
            console.log(status);
            // if (status === 'TOUCHED') {
            //     this.manageErrors();
            // }
        });

        if (this.required === '') {
            this.required = true;
        }
    }

    ngAfterContentInit(): void {
        if (this.innerValue) {
            this.innerValue = this.inputType === 'number' ? parseFloat(this.defaultValue) : this.defaultValue;
        }
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
     * Convert number to string
     * @param number
     */
    private convertDecimalToStr(number: number): string {
        return (this.isNumeric(number)) ? number.toString() : '';
    }

    /**
     * Convert string to number
     * @param
     */
    private convertStrToDecimal(str: string): number {
        const strWithDot = str.replace(this.decimalMark, '.');
        return (this.isNumeric(strWithDot)) ? parseFloat(strWithDot) : 0;
    }

    /**
     * Get non formatted value
     * @param value
     */
    private getNonFormattedValue(value: string): string {
        return value.replace(/[^-\d\\.]/g, '');
    }

    /**
     * handleFocus
     * @param event
     */
    handleFocus(event: any) {
        if (this.inputType === 'number' && this.formatNumber) {
            const strVal: string = this.htmlElement!.value;
            const unmaskedStr: string = this.getNonFormattedValue(strVal);
            this.updateInputValue(unmaskedStr);
        }
    }

    /**
     * handleKeyPress
     * @param event
     */
    handleKeyPress(event: any): void {
        if (this.inputType === 'number') {
            const newChar: string =String.fromCharCode(event.which);

            if (!this.isNewNumberInputValueValid(newChar)) {
                event.preventDefault();
                return;
            }

            if (this.formatNumber) {
                // Handle decimal mark input
                const currentValue: string = event.target.value;
                const separatorIdx: number = currentValue.indexOf(this.decimalMark);
                const hasFractionalPart: boolean = (separatorIdx >= 0);

                if (!hasFractionalPart || newChar !== this.decimalMark) {
                    return;
                }

                // Move cursor to the decimal mark
                const isOutsideSelection = !this.isIndexBetweenSelection(separatorIdx);
                if (isOutsideSelection) {
                    const positionAfterMark = separatorIdx + 1;
                    this.setCursorPosition(positionAfterMark);
                    event.preventDefault();
                    return;
                }
            }
        }
    }

    /**
     * Check if separator index is between selection
     * @param index
     */
    private isIndexBetweenSelection(index: number): boolean {
        if (this.htmlElement!.selectionStart === this.htmlElement!.selectionEnd) {
            return false;
        }

        return (index >= this.htmlElement!.selectionStart! && index < this.htmlElement!.selectionEnd!);
    }

    /**
     * Check if new number input value is valid (avoid writing letters or pasting invalid data)
     * @param bewValue
     */
    private isNewNumberInputValueValid(newValue: string): boolean {
        if (newValue === undefined || newValue === null || newValue === '') {
            return true;
        }

        const allowedChars: RegExp = (this.decimalsNumber) ? /^[-?\d.]+$/ : /^[-?\d]+$/;

        return allowedChars.test(newValue);
    }

    /**
     * Check if element is numeric
     * @param number
     */
    private isNumeric(element: any): boolean {
        return !isNaN(parseFloat(element)) && isFinite(element);
    }

    /**
     * We loop into an array of errors and add the validation messages to show in the template
     */
    manageErrors = () => {
        this.errors = [];
    }

    /**
     * onBlur
     * @param event
     */
    onBlur(event: Event): void {
        if (event) {
            if (this.inputType === 'number' && this.formatNumber) {
                const strVal: string = this.htmlElement!.value;
                const numVal: number = this.convertStrToDecimal(strVal);
                this.setFormattedInputValue(numVal);
            }
        }
    }

    /**
     * Event fired when input value is changed. Later propagated up to the form control using the custom value accessor interface
     */
    onChange(event: Event, byUser?: boolean): void {
        if (this.inputType === 'number' && this.formatNumber) {
            this.restrictDecimalValue();
            const strVal: string = this.htmlElement!.value;
            const unmaskedVal: string = this.getNonFormattedValue(strVal);
            const numVal: number = this.convertStrToDecimal(unmaskedVal);

            if (numVal !== this.previousValue) {
                this.previousValue = numVal;
                this.propagateChange(numVal);
            }

            if (this.min && numVal <= this.min) {
                this.previousValue = this.min;
                this.propagateChange(this.min);
                this.writeValue(this.min, byUser);
            }

            if (this.max && numVal >= this.max) {
                this.previousValue = this.max;
                this.propagateChange(this.max);
                this.writeValue(this.max, byUser);
            }
        } else {
            this.writeValue(this.htmlElement!.value, byUser);
        }

        this.manageErrors();
    }

    /**
     * Function called when clicking on suffix icon
     */
    onSuffixClick(): void {
        this.suffixClick.emit();
    }

    /**
     * Function that will propagate the changes into the custom form control
     * @param _ It will be a function mainly, now coming after registerOnChange
     */
    propagateChange = (_: any) => { }

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
    registerOnTouched(fn: any): void { }

    /**
     * Remove decimal numbers depending on the decimalsNumbers property
     */
    private restrictDecimalValue(): void {
        const strVal: string = this.htmlElement!.value;
        const dotIdx: number = strVal.indexOf(this.decimalMark);
        const hasFractionalPart: boolean = (dotIdx >= 0);

        if (hasFractionalPart) {
            const fractionalPart: string = strVal.substring(dotIdx + 1);

            if (fractionalPart.length > this.decimalsNumber) {
                const choppedVal: string = strVal.substring(0, dotIdx + (this.decimalsNumber + 1));
                this.updateInputValue(choppedVal, true);
                return;
            }
        }
    }

    /**
     * Save cursor position
     */
    private saveCursorPosition(): void {
        const position: number = this.htmlElement!.selectionStart || 0;
        setTimeout(() => {
            this.setCursorPosition(position);
        }, 1);
    }

    /**
     * Set cursor position
     */
    private setCursorPosition(position: number): void {
        this.htmlElement!.selectionStart = position;
        this.htmlElement!.selectionEnd = position;
    }

    /**
     * Sets formatted input number value
     * @param numVal
     */
    private setFormattedInputValue(numVal: number): void {
        if (!this.isNumeric(numVal)) {
            this.updateInputValue('');
            return;
        }

        const strVal: string = this.convertDecimalToStr(numVal);
        const newVal: string = this.transformWithPipe(strVal);

        this.updateInputValue(newVal);
    }

    /**
     * transform string number with pipe
     * @param str
     */
    private transformWithPipe(str: string): string {
        return this.decimalPipe.transform(str, `1.${ this.decimalsNumber }-${ this.decimalsNumber }`) || '';
    }

    /**
     * Update cursor position and input value
     * @param value
     * @param savePosition
     */
    private updateInputValue(value: string, savePosition: boolean = false): void {
        if (savePosition) {
            this.saveCursorPosition();
        }

        this.htmlElement!.value = value;
        this.innerValue = value;
    }

    /**
     * From ControlValueAccessor interface
     * obj
     */
    writeValue(value: any, byUser?: boolean): void {
        if (this.inputType === 'number' && this.formatNumber) {
            this.previousValue = value;
            this.setFormattedInputValue(value);
        } else {
            if (this.inputType === 'number' && !this.isNewNumberInputValueValid(value)) {
                this.updateInputValue(this.innerValue);
                return;
            }

            this.innerValue = value;

            if (value !== null && this.propagateChange) {
                if (byUser) {
                    this.propagateChange(value);
                }
            }
        }
    }

}
