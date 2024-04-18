import { Component, Input } from '@angular/core';

// Interfaces
import { Icon } from '@shared/interfaces/icon.interface';

@Component({
    selector: 'test-nav-bar',
    templateUrl: 'nav-bar-test.component.html',
    styleUrls: [
        'nav-bar-test.component.scss'
    ]
})

export class NavBarTestComponent {

    public icon: Icon = {
        name: 'chevron-left',
        size: '2xs',
        type: 'fas'
    }

    @Input() public title: string;

    constructor() { }

}
