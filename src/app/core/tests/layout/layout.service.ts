import { Injectable } from '@angular/core';

// Interfaces
import { CustomComponent } from '@shared/interfaces/custom-component.interface';

@Injectable({
    providedIn: 'root'
})
export class LayoutTestService {

    private customComponents: CustomComponent[] = [
        {
            id: 'button',
            image: 'assets/media/tests/button.png',
            route: 'buttons',
            title: 'Button'
        },
        {
            description: 'With this component you can use the icons from the font awesome package',
            id: 'icon',
            image: 'assets/media/tests/icon.svg',
            route: 'icons',
            title: 'Icon'
        },
        {
            id: 'image',
            image: 'assets/media/tests/image.jpg',
            route: 'img',
            title: 'Image'
        },
        {
            id: 'input',
            image: 'assets/media/tests/input.png',
            route: 'input',
            title: 'Input'
        },
        {
            id: 'textarea',
            image: 'assets/media/tests/textarea.png',
            route: 'textarea',
            title: 'Textarea'
        }
    ];

    constructor() { }

    get components(): CustomComponent[] {
        return this.customComponents;
    }

}
