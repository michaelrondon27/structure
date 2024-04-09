import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { ImgComponent } from './img.component';
import { DefaultImageOnErrorDirectiveModule } from '@shared/directives/default-image-on-error/default-image-on-error.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ImgComponent
    ],
    exports: [
        ImgComponent,
    ],
    imports: [
        DefaultImageOnErrorDirectiveModule,
        CommonModule]
})
export class FundaeImgModule { }
