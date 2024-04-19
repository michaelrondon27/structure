import { AfterContentInit, Component } from '@angular/core';
import * as fontAwesomeIcons from '@fortawesome/free-solid-svg-icons';
import { IconName, IconPrefix } from '@fortawesome/free-solid-svg-icons';

// Interfaces
import {
    CustomComponentInformation,
    CustomInterfaceInformation
} from '@shared/interfaces/custom-component.interface';
import { Icon } from '@shared/interfaces/icon.interface';

@Component({
    selector: 'tests-icon',
    templateUrl: './icon-test.component.html',
    styleUrls: [
        './icon-test.component.scss'
    ]
})
export class IconTestComponent implements AfterContentInit {

    public componentInformation: CustomComponentInformation = {
        inputs: [
            {
                property: 'icon',
                type: 'Icon'
            }
        ],
        selectorName: 'fundae-icon'
    };
    public componentUsageExample: string = `
        <fundae-icon
            [icon]="icon"
        ></fundae-icon>
    `;
    public fontAwesomeIcons: Icon[] = [];
    public icon: Icon = {
        animation: 'fade',
        border: true,
        flip: 'horizontal',
        size: '2x',
        name: 'person-skiing',
        type: 'fas'
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

    constructor() { }

    ngAfterContentInit(): void {
        this.setIcons();
    }

    private setIcons(): void {
        this.fontAwesomeIcons = Object.values(fontAwesomeIcons)
        .filter((fontAwesomeIcon: any) => fontAwesomeIcon.iconName && fontAwesomeIcon.prefix)
        .map((fontAwesomeIcon: any) => {
            return {
                name: fontAwesomeIcon.iconName as IconName,
                type: fontAwesomeIcon.prefix as IconPrefix
            }
        });
    }

}
