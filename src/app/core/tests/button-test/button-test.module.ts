import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { ButtonTestComponent } from "./button-test.component";

// Modules
import { ComponentSpecificationsModule } from "../components/component-specifications/component-specifications.module";
import { FundaeButtonModule } from "@shared/components/button/button.module";
import { NavBarTestModule } from "../components/nav-bar-test/nav-bar-test.module";

// Routes
import { ButtonTestRoutingModule } from "./button-test-routing.module";

@NgModule({
    declarations: [
        ButtonTestComponent
    ],
    imports: [
        CommonModule,
        ComponentSpecificationsModule,
        ButtonTestRoutingModule,
        FundaeButtonModule,
        NavBarTestModule
    ]
})
export class ButtonTestModule { }
