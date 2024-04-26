import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Interfaces
import { CustomComponentInformation } from '@shared/interfaces/custom-component.interface';

interface TextareaList {
    defaultValue?: string;
    disabled?    : boolean;
    maxHeight?   : number;
    placeholder? : string;
    readonly?    : boolean;
    required?    : boolean;
    rows?        : number;
    title        : string;
}

@Component({
    selector: 'tests-tetarea',
    templateUrl: 'textarea-test.component.html',
    styleUrls: [
        'textarea-test.component.scss'
    ]
})

export class TextareaTestComponent {

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
                property: 'defaultValue',
                type: 'any'
            },
            {
                property: 'disabled',
                type: 'boolean'
            },
            {
                property: 'formControlName?',
                type: 'string'
            },
            {
                property: 'inputId',
                type: 'string'
            },
            {
                property: 'maxHeight',
                type: 'number'
            },
            {
                property: 'maxLength',
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
                property: 'readonly',
                type: 'boolean'
            },
            {
                property: 'required',
                type: 'boolean | string'
            },
            {
                property: 'rows',
                type: 'number'
            },
            {
                property: 'title',
                type: 'string'
            }
        ],
        selectorName: 'fundae-textarea'
    }
    public componentUsageExample: string = `
        <fundae-textarea
            [control]="formExample.controls.something"
            formControlName="something"
            placeholder="Tell me something"
            [required]="true"
            title="Something"
        ></fundae-textarea>
    `;
    public form: FormGroup = this.formBuilder.group({
        notes: ['', [Validators.required, Validators.maxLength(50)]]
    });
    public formExample: FormGroup = this.formBuilder.group({
        something: ['', [Validators.required]]
    });
    public textareas: TextareaList[] = [
        {
            placeholder: 'Type a description',
            required: true,
            rows: 3,
            title: 'Description'
        },
        {
            defaultValue: 'This is a bio example',
            readonly: true,
            rows: 5,
            title: 'Bio'
        },
        {
            defaultValue: 'This textarea is disabled',
            disabled: true,
            maxHeight: 100,
            rows: 5,
            title: 'Example'
        }
    ];

    constructor(
        private formBuilder: FormBuilder
    ) { }

}
