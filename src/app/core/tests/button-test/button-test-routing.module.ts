import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { ButtonTestComponent } from "./button-test.component";

const routes: Routes = [
    {
        path: '',
        component: ButtonTestComponent
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
export class ButtonTestRoutingModule { }
