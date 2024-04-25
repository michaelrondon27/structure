import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { InputTestComponent } from "./input-test.component";

const routes: Routes = [
    {
        path: '',
        component: InputTestComponent
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
export class InputTestRoutingModule { }
