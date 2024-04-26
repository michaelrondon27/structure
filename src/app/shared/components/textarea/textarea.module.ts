import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { TextareaComponent } from "./textarea.component";

@NgModule({
    declarations: [
        TextareaComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TextareaComponent
    ]
})
export class FundaeTextareaModule { }
