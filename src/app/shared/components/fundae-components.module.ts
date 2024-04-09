import { NgModule } from '@angular/core';
import { FundaeButtonModule } from './button/button.module';
import { FundaeIconModule } from './icon/icon.module';
import { FundaeImgModule } from './img/img.module';
import { FundaeInputModule } from './input/input.module';
import { CommonModule } from '@angular/common';

const componentModules = [
    FundaeButtonModule,
    FundaeIconModule,
    FundaeImgModule,
    FundaeInputModule
]


@NgModule({
    declarations: [],
    imports: [
        ...componentModules,
        CommonModule
    ],
    exports: [...componentModules]
})
export class FundaeComponentsModule { }