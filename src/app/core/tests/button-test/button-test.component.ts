import { Component } from '@angular/core';

// Interfaces
import { CustomComponentInformation } from '@shared/interfaces/custom-component.interface';

@Component({
    selector: 'tests-button',
    templateUrl: './button-test.component.html',
    styleUrls: [
        './button-test.component.scss'
    ]
})
export class ButtonTestComponent {

    public componentInformation: CustomComponentInformation = {
        selectorName: 'fundae-button'
    }

    constructor() { }

}
