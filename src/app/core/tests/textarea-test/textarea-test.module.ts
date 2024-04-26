import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { TextareaTestComponent } from "./textarea-test.component";

// Modules
import { ComponentSpecificationsModule } from "../components/component-specifications/component-specifications.module";
import { FundaeTextareaModule } from "@shared/components/textarea/textarea.module";
import { NavBarTestModule } from "../components/nav-bar-test/nav-bar-test.module";

// Routes
import { TextareaTestRoutingModule } from "./textarea-test-routing.module";

@NgModule({
    declarations: [
        TextareaTestComponent
    ],
    imports: [
        CommonModule,
        ComponentSpecificationsModule,
        FundaeTextareaModule,
        NavBarTestModule,
        ReactiveFormsModule,
        TextareaTestRoutingModule
    ]
})
export class TextareaTestModule { }
