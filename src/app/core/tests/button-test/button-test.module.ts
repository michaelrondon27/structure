import { NgModule } from "@angular/core";

// Components
import { ButtonTestComponent } from "./button-test.component";

// Modules
import { NavBarTestModule } from "../components/nav-bar-test/nav-bar-test.module";

// Routes
import { ButtonTestRoutingModule } from "./button-test-routing.module";

@NgModule({
    declarations: [
        ButtonTestComponent
    ],
    imports: [
        ButtonTestRoutingModule,
        NavBarTestModule
    ]
})
export class ButtonTestModule { }
