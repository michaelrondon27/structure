import { NgModule } from '@angular/core';
import { TestsRoutingModule } from './tests-routing.module';
import { TestsComponent } from './tests.component';
import { IconTestComponent } from './icon-test/icon-test.component';
import { InputTestComponent } from './input-test/input-test.component';
import { ButtonTestComponent } from './button-test/button-test.component';
import { FundaeComponentsModule } from '@shared/components/fundae-components.module';
import { ImgTestComponent } from './img-test/img-test.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        TestsComponent,
        IconTestComponent,
        InputTestComponent,
        ButtonTestComponent,
        ImgTestComponent,
    ],
    imports: [
        TestsRoutingModule,
        CommonModule,
        FundaeComponentsModule
    ],
    exports: [
        TestsComponent
    ]
})
export class TestsModule { }