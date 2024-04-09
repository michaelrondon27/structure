import { NgModule } from "@angular/core";
import { CommonModule, DecimalPipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Components
import { InputComponent } from "./input.component";

// Modules
import { FundaeIconModule } from "../icon/icon.module";

@NgModule({
    declarations: [
        InputComponent
    ],
    imports: [
        CommonModule,
        FundaeIconModule
    ],
    exports: [
        FormsModule,
        InputComponent,
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        DecimalPipe
    ]
})
export class FundaeInputModule { }
