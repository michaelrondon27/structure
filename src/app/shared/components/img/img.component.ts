import { Component, Input } from '@angular/core';

@Component({
    selector: 'fundae-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.scss']
})

export class ImgComponent {

    @Input() public disableDefaultImage: boolean = false;
    @Input() public loading: 'eager' | 'lazy' = 'eager';
    @Input() public src: string;

    @Input() public defaultImage: string = '/assets/media/shared/error.png';

    constructor() { }

}
