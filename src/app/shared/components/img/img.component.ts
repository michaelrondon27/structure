import { Component, Input } from '@angular/core';

// Types
import { ImgLoadings } from '@shared/types/img.type';

@Component({
    selector: 'fundae-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.scss']
})

export class ImgComponent {

    @Input() public defaultImage       : string = '/assets/media/shared/error.png';
    @Input() public disableDefaultImage: boolean = false;
    @Input() public loading            : ImgLoadings = 'eager';
    @Input() public src                : string;

    constructor() { }

}
