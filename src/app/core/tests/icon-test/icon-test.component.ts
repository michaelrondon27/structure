import { Component, OnInit } from '@angular/core';
import * as fontAwesomeIcons from '@fortawesome/free-solid-svg-icons';
import { IconName, IconPrefix } from '@fortawesome/free-solid-svg-icons';

// Interfaces
import { Icon } from '@shared/interfaces/icon.interface';

interface CustomComponentInformation {
    inputs: [{
        interface: string;
        property: string;
    }],
    selectorName: string;
}

@Component({
    selector: 'tests-icon',
    templateUrl: './icon-test.component.html',
    styleUrls: [
        './icon-test.component.scss'
    ]
})
export class IconTestComponent implements OnInit {

    public componentInformation: CustomComponentInformation = {
        inputs: [
            {
                interface: 'Icon',
                property: 'icon'
            }
        ],
        selectorName: 'fundae-icon'
    };
    public fontAwesomeIcons: Icon[] = [];

    constructor() { }

    ngOnInit(): void {
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
