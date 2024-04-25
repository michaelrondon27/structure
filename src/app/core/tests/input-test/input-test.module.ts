import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Components
import { InputTestComponent } from "./input-test.component";

// Modules
import { ComponentSpecificationsModule } from "../components/component-specifications/component-specifications.module";
import { FundaeInputModule } from "@shared/components/input/input.module";
import { NavBarTestModule } from "../components/nav-bar-test/nav-bar-test.module";

// Routes
import { InputTestRoutingModule } from "./input-test-routing.module";

@NgModule({
    declarations: [
        InputTestComponent
    ],
    imports: [
        ComponentSpecificationsModule,
        InputTestRoutingModule,
        FundaeInputModule,
        NavBarTestModule,
        ReactiveFormsModule
    ]
})
export class InputTestModule { }
