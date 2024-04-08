import { Component, Input, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faCoffee } from '@fortawesome/free-solid-svg-icons';

// Interfaces
import { Icon } from '@shared/interfaces/icon.interface';

@Component({
    selector: 'fundae-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {

    @Input() public icon?: Icon;

    constructor(
        faIconLibrary: FaIconLibrary
    ) {
        this.addIcons(faIconLibrary);
    }

    ngOnInit(): void {
        if (!this.icon) {
            throw Error('Icon property require');
        }
    }

    private addIcons(faIconLibrary: FaIconLibrary): void {
        faIconLibrary.addIcons(
            faChevronRight,
            faCoffee
        );
    }

}
