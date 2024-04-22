import { Component, Input } from '@angular/core';

// Interfaces
import {
    CustomComponentInformation,
    CustomInterfaceInformation,
    CustomTypesInformation
} from '@shared/interfaces/custom-component.interface';

@Component({
    selector: 'tests-component-specifications',
    templateUrl: 'component-specifications.component.html',
    styleUrls: [
        'component-specifications.component.scss'
    ]
})

export class ComponentSpecificationsComponent {

    @Input() public componentInformation: CustomComponentInformation;
    @Input() public interfacesInformation: CustomInterfaceInformation[] = [];
    @Input() public typesInformation: CustomTypesInformation[] = [];

    constructor() { }

}
