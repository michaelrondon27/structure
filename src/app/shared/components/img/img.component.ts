import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'fundae-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.scss']
})

export class ImgComponent implements OnInit {

    @Input() public src: string;
    @Input() public loading: 'eager' | 'lazy' = 'eager';
    @Input() public disableDefaultImage: boolean = false;

    @Input() public defaultImage: string = '/assets/media/shared/error.png';

    constructor() { }

    ngOnInit(): void {

    }

}
