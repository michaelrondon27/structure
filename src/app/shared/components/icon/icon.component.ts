import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { IconPack, fas } from '@fortawesome/free-solid-svg-icons';

// Interfaces
import { Icon } from '@shared/interfaces/icon.interface';

@Component({
    selector: 'fundae-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})

export class IconComponent {

    @Input() public icon: Icon;

    constructor(
        faIconLibrary: FaIconLibrary
    ) {
        this.addIcons(faIconLibrary);
    }

    /**
     * Function that allows to add the icons packages that we will need on the app
     * @param faIconLibrary icon library
     */
    private addIcons(faIconLibrary: FaIconLibrary): void {
        faIconLibrary.addIconPacks(fab as IconPack);
        faIconLibrary.addIconPacks(far as IconPack);
        faIconLibrary.addIconPacks(fas);

    }

}
