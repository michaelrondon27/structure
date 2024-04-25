import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Interfaces
import { CustomComponentInformation, CustomInterfaceInformation, CustomTypesInformation } from '@shared/interfaces/custom-component.interface';
import { Icon } from '@shared/interfaces/icon.interface';

// Types
import { InputType } from '@shared/types/input.type';

interface InputList {
    defaultValue?: any;
    disabled?: boolean;
    inputType?: InputType;
    placeholder: string;
    prefixIcon?: Icon;
    readonly?: boolean;
    required?: boolean;
    suffixIcon?: Icon;
    title: string;
}

@Component({
    selector: 'tests-input',
    templateUrl: './input-test.component.html',
    styleUrls: [
        './input-test.component.scss'
    ]
})
export class InputTestComponent {

    public componentInformation: CustomComponentInformation = {
        inputs: [
            {
                property: 'autoFocus',
                type: 'boolean | string'
            },
            {
                property: 'control',
                type: 'FormControl'
            },
            {
                property: 'decimalsNumber',
                type: 'number'
            },
            {
                property: 'defaultValue',
                type: 'any'
            },
            {
                property: 'disabled',
                type: 'boolean'
            },
            {
                property: 'formatNumber',
                type: 'boolean'
            },
            {
                property: 'formControlName?',
                type: 'string'
            },
            {
                property: 'iconsColor',
                type: 'string'
            },
            {
                property: 'inputId',
                type: 'string'
            },
            {
                property: 'inputType',
                type: 'InputType'
            },
            {
                property: 'max?',
                type: 'number'
            },
            {
                property: 'min?',
                type: 'number'
            },
            {
                property: 'noLabel',
                type: 'boolean | string'
            },
            {
                property: 'placeholder?',
                type: 'string'
            },
            {
                property: 'prefixIcon?',
                type: 'Icon'
            },
            {
                property: 'readonly',
                type: 'boolean'
            },
            {
                property: 'required',
                type: 'boolean | string'
            },
            {
                property: 'step?',
                type: 'number'
            },
            {
                property: 'suffixIcon?',
                type: 'Icon'
            },
            {
                property: 'title',
                type: 'string'
            }
        ],
        outputs: [
            {
                property: 'suffixClick',
                type: 'EventEmitter<void>'
            }
        ],
        selectorName: 'fundae-input'
    }
    public componentUsageExample: string = `
        <fundae-input
            [control]="formExample.controls.superhero"
            formControlName="superhero"
            placeholder="Name a superhero"
            [required]="true"
            title="Superhero"
        ></fundae-input>
    `;
    public form: FormGroup = this.formBuilder.group({
        lastName: ['', [Validators.required]]
    });
    public formExample: FormGroup = this.formBuilder.group({
        superhero: ['', [Validators.required]]
    });
    public inputs: InputList[] = [
        {
            inputType: 'text',
            placeholder: 'Type your first name',
            required: true,
            title: 'First name'
        },
        {
            inputType: 'password',
            placeholder: 'Type your password',
            suffixIcon: {
                name: 'eye',
                type: 'fas'
            },
            title: 'Password'
        },
        {
            defaultValue: 'test@test.com',
            inputType: 'text',
            placeholder: 'type your email',
            prefixIcon: {
                name: 'at',
                type: 'fas'
            },
            readonly: true,
            title: 'Email'
        },
        {
            defaultValue: '10000.55',
            disabled: true,
            inputType: 'number',
            placeholder: 'Type a price',
            title: 'Price'
        }
    ];
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
    public prefixIcon: Icon = {
        name: 'magnifying-glass',
        type: 'fas'
    }
    public typesInformation: CustomTypesInformation[] = [
        {
            name: 'InputType',
            values: [
                'number',
                'password',
                'text'
            ]
        }
    ];

    constructor(
        private formBuilder: FormBuilder
    ) { }

}
