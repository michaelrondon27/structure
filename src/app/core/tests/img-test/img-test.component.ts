import { Component } from '@angular/core';

// Interfaces
import { CustomComponentInformation, CustomTypesInformation } from '@shared/interfaces/custom-component.interface';

interface ImgList {
    defaultImage?       : string;
    disableDefaultImage?: boolean;
    img                 : string;
    type                : string;
}

@Component({
    selector: 'tests-img',
    templateUrl: './img-test.component.html',
    styleUrls: [
        './img-test.component.scss'
    ]
})
export class ImgTestComponent {

    public componentInformation: CustomComponentInformation = {
        inputs: [
            {
                property: 'defaultImage',
                type: 'string'
            },
            {
                property: 'disableDefaultImage',
                type: 'boolean'
            },
            {
                property: 'loading',
                type: 'ImgLoadings'
            },
            {
                property: 'src',
                type: 'string'
            }
        ],
        selectorName: 'fundae-img'
    }
    public componentUsageExample: string = `
        <fundae-img
            src="https://cdn.pixabay.com/photo/2023/11/12/17/12/puppy-8383633_1280.jpg"
        ></fundae-img>
    `;
    public imgs: ImgList[] = [
        {
            img: 'https://cdn.pixabay.com/photo/2023/11/12/17/12/puppy-8383633_1280.jpg',
            type: 'Simple'
        },
        {
            defaultImage: '/assets/media/shared/error.png',
            img: 'https://cdn.pixabay.com/photo/2023/11/12/17/12/puppy.png',
            type: 'Default image on error'
        },
        {
            defaultImage: 'https://t1.uc.ltmcdn.com/es/posts/8/3/2/como_saber_si_mi_gato_tiene_sida_25238_600.jpg',
            img: 'https://cdn.pixabay.com/photo/2023/11/12/17/12/puppy.png',
            type: 'Default image on error CUSTOM'
        },
        {
            disableDefaultImage: true,
            img: 'https://cdn.pixabay.com/photo/2023/11/12/17/12/puppy.png',
            type: 'Default image on error DISABLED'
        }
    ];
    public typesInformation: CustomTypesInformation[] = [
        {
            name: 'ImgLoadings',
            values: [
                'eager',
                'lazy'
            ]
        }
    ];

    constructor() {}

}
