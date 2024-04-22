import { Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

// Interfaces
import { Icon } from '@shared/interfaces/icon.interface';

// Types
import { ButtonTypes, Types } from '@shared/types/button.type';

@Component({
    selector: 'fundae-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    encapsulation: ViewEncapsulation.None
})
/**
 * BUTTON Examples of using
 * fundae-button(name="name", type="type", [isDisabled]="true/false", class="[primary/secondary/alternative]", [icon]="icon")
 */
export class ButtonComponent implements OnInit, DoCheck {

    public classesToApply: string[] = [];
    public loadingIcon: Icon = {
        name: 'circle-notch',
        type: 'fas'
    };

    @Input() public buttonType: ButtonTypes = 'btn-primary';
    @Input() public center: boolean | string = false;
    @Input() public icon: Icon;
    @Input() public isDisabled: boolean = false;
    @Input() public loading: boolean = false;
    @Input() public loadingText: string = 'loading';
    @Input() public name: string;
    @Input() public rounded: boolean | string = false;
    @Input() public type: Types = 'button';

    @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void {
        this.parseComponentAssumptions();
        this.checkComponentRequirements();
    }

    ngDoCheck(): void {
        this.classesToApply = [];
        this.classesToApply.push(this.buttonType);
        this.classesToApply.push(this.center ? 'center' : '');
        this.classesToApply.push(this.loading ? 'loading' : '');
        this.classesToApply.push(this.rounded ? 'rounded' : 'padding-x');
    }

    /**
     * Call to the function that is coming as input in the directive use
     */
    buttonClicked(): void {
        this.buttonClick.emit();
    }

    /**
     * Function that sets the component properties to specific values based on assumptions
     * i.E: If rounded is received as an empty string, then is transformed to a true value.
     */
    parseComponentAssumptions(): void {
        if (this.rounded === '') {
            this.rounded = true;
        }
    }

    /**
     * Function that check that the component initialization requirements
     */
    checkComponentRequirements(): void {
        if (typeof this.rounded !== 'boolean') {
            console.error('[FUNDAE-BUTTON]: rounded property must be a boolean or empty string.');
        }
    }

}
