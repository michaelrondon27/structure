import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { ImgTestComponent } from "./img-test.component";

// Modules
import { ComponentSpecificationsModule } from "../components/component-specifications/component-specifications.module";
import { FundaeImgModule } from "@shared/components/img/img.module";
import { NavBarTestModule } from "../components/nav-bar-test/nav-bar-test.module";

// Routes
import { ImgTestRoutingModule } from "./img-test-routing.module";

@NgModule({
    declarations: [
        ImgTestComponent
    ],
    imports: [
        CommonModule,
        ComponentSpecificationsModule,
        ImgTestRoutingModule,
        FundaeImgModule,
        NavBarTestModule
    ]
})
export class ImgTestModule { }
