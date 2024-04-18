import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ImgComponent } from './img.component';

// Directives
import { DefaultImageOnErrorDirectiveModule } from '@shared/directives/default-image-on-error/default-image-on-error.directive';

@NgModule({
    declarations: [
        ImgComponent
    ],
    exports: [
        ImgComponent,
    ],
    imports: [
        DefaultImageOnErrorDirectiveModule,
        CommonModule
    ]
})
export class FundaeImgModule { }
