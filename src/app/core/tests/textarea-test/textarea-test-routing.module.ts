import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { TextareaTestComponent } from "./textarea-test.component";

const routes: Routes = [
    {
        path: '',
        component: TextareaTestComponent
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
export class TextareaTestRoutingModule { }
