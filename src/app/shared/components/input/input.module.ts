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
        CommonModule,
        FormsModule,
        InputComponent,
        ReactiveFormsModule
    ],
    providers: [
        DecimalPipe
    ]
})
export class FundaeInputModule { }
