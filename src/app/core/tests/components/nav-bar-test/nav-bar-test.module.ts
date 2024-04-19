import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// Components
import { NavBarTestComponent } from "./nav-bar-test.component";

// Modules
import { FundaeIconModule } from "@shared/components/icon/icon.module";

@NgModule({
    declarations: [
        NavBarTestComponent
    ],
    exports: [
        NavBarTestComponent
    ],
    imports: [
        FundaeIconModule,
        RouterModule
    ]
})
export class NavBarTestModule { }
