import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestsComponent } from './tests.component';
import { InputTestComponent } from './input-test/input-test.component';
import { IconTestComponent } from './icon-test/icon-test.component';
import { ButtonTestComponent } from './button-test/button-test.component';
import { ImgTestComponent } from './img-test/img-test.component';

const routes: Routes = [
    {
        path: '',
        component: TestsComponent
    },
    {
        path: 'button',
        component: ButtonTestComponent
    },
    {
        path: 'icon',
        component: IconTestComponent
    },
    {
        path: 'input',
        component: InputTestComponent
    },
    {
        path: 'img',
        component: ImgTestComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestsRoutingModule { }
