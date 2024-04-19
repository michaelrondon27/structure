import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { IconTestComponent } from "./icon-test.component";

// Modules
import { ComponentSpecificationsModule } from "../components/component-specifications/component-specifications.module";
import { FundaeIconModule } from "@shared/components/icon/icon.module";
import { NavBarTestModule } from "../components/nav-bar-test/nav-bar-test.module";

// Routes
import { IconTestRoutingModule } from "./icon-test-routing.module";

@NgModule({
    declarations: [
        IconTestComponent
    ],
    imports: [
        CommonModule,
        ComponentSpecificationsModule,
        FundaeIconModule,
        IconTestRoutingModule,
        NavBarTestModule
    ]
})
export class IconTestModule { }
