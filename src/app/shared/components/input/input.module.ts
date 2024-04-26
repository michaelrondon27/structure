import { NgModule } from "@angular/core";
import { CommonModule, DecimalPipe } from "@angular/common";

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
        InputComponent
    ],
    providers: [
        DecimalPipe
    ]
})
export class FundaeInputModule { }
