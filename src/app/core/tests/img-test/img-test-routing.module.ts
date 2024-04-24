import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { ImgTestComponent } from "./img-test.component";

const routes: Routes = [
    {
        path: '',
        component: ImgTestComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class ImgTestRoutingModule { }
