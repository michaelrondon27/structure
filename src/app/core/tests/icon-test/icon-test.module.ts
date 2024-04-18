import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { IconTestComponent } from "./icon-test.component";
import { NavBarTestComponent } from "../components/nav-bar-test/nav-bar-test.component";

// Modules
import { FundaeIconModule } from "@shared/components/icon/icon.module";

// Routes
import { IconTestRoutingModule } from "./icon-test-routing.module";

@NgModule({
    declarations: [
        IconTestComponent,
        NavBarTestComponent
    ],
    imports: [
        CommonModule,
        FundaeIconModule,
        IconTestRoutingModule
    ]
})
export class IconTestModule { }
