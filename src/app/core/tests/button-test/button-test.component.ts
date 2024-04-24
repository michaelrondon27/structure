import { Component } from '@angular/core';

// Interfaces
import {
    CustomComponentInformation,
    CustomInterfaceInformation,
    CustomTypesInformation
} from '@shared/interfaces/custom-component.interface';
import { Icon } from '@shared/interfaces/icon.interface';

// Types
import { ButtonTypes } from '@shared/types/button.type';

interface ButtonsList {
    buttonClick?: boolean;
    buttonType: ButtonTypes;
    icon?: Icon;
    isDisabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    name: string;
}

@Component({
    selector: 'tests-button',
    templateUrl: './button-test.component.html',
    styleUrls: [
        './button-test.component.scss'
    ]
})
export class ButtonTestComponent {

    public buttons: ButtonsList[] = [
        {
            buttonType: 'btn-primary',
            name: 'Primary'
        },
        {
            buttonType: 'btn-secondary',
            icon: {
                name: 'app-store',
                type: 'fab'
            },
            name: 'Secondary'
        },
        {
            buttonType: 'btn-success',
            isDisabled: true,
            name: 'Success'
        },
        {
            buttonType: 'btn-danger',
            loading: true,
            name: 'Danger'
        },
        {
            buttonType: 'btn-warning',
            loading: true,
            loadingText: 'Sending',
            name: 'Warning'
        },
        {
            buttonClick: true,
            buttonType: 'btn-info',
            name: 'Info'
        },
        {
            buttonType: 'btn-light',
            name: 'Light'
        },
        {
            buttonType: 'btn-dark',
            name: 'Dark'
        }
    ];
    public count: number = 0;
    public componentInformation: CustomComponentInformation = {
        inputs: [
            {
                property: 'buttonType',
                type: 'ButtonTypes'
            },
            {
                property: 'center',
                type: 'boolean | string'
            },
            {
                property: 'icon',
                type: 'Icon'
            },
            {
                property: 'isDisabled',
                type: 'boolean'
            },
            {
                property: 'loading',
                type: 'boolean'
            },
            {
                property: 'loadingText',
                type: 'string'
            },
            {
                property: 'name',
                type: 'string'
            },
            {
                property: 'rounded',
                type: 'boolean | string'
            },
            {
                property: 'type',
                type: 'Types'
            }
        ],
        outputs: [
            {
                property: 'buttonClick',
                type: 'EventEmitter<void>'
            }
        ],
        selectorName: 'fundae-button'
    }
    public componentUsageExample: string = `
        <fundae-button
            buttonType="btn-primary"
            [icon]="icon"
            name="Test"
        ></fundae-button>
    `;
    public icon: Icon = {
        name: 'google-play',
        type: 'fab'
    };
    public interfacesInformation: CustomInterfaceInformation[] = [
        {
            name: 'Icon',
            properties: [
                'animation?: AnimationProp',
                'border?: boolean',
                'flip?: FlipProp',
                'name: IconName',
                'pull?: PullProp',
                'rotate?: RotateProp',
                'size?: SizeProp',
                'type: IconPrefix'
            ]
        }
    ];
    public typesInformation: CustomTypesInformation[] = [
        {
            name: 'ButtonTypes',
            values: [
                'btn-primary',
                'btn-secondary',
                'btn-success',
                'btn-danger',
                'btn-warning',
                'btn-info',
                'btn-light',
                'btn-dark'
            ]
        },
        {
            name: 'Types',
            values: [
                'button',
                'reset',
                'submit'
            ]
        }
    ];

    constructor() { }

    handleButtonCLick(): void {
        this.count++;
        console.log(this.count);
    }

}
