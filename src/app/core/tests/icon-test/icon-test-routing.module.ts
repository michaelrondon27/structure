import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { IconTestComponent } from "./icon-test.component";

const routes: Routes = [
    {
        path: '',
        component: IconTestComponent
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
export class IconTestRoutingModule { }
