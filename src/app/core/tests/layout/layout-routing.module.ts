import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent
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
export class LayoutTestRoutingModule { }
