import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'fundae-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.sass'],
    encapsulation: ViewEncapsulation.None
})
/**
 * BUTTON Examples of using
 * ezz-button(name="name", type="type", [isDisabled]="true/false", class="[primary/secondary/alternative]", [icon]="icon")
 */
export class ButtonComponent implements OnInit {
    @Output() onClick: EventEmitter<void> = new EventEmitter();

    @Input() disabled: boolean;
    @Input() classes: string;

    constructor() {

    }

    ngOnInit(): void {

    }

    clicked() {
        this.onClick.emit();
    }
}
