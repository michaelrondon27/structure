import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { CardLayoutTestComponent } from "./components/card-layout-test/card-layout-test.component";
import { HeaderLayoutTestComponent } from "./components/header-layout-test/header-layout-test.component";
import { LayoutComponent } from "./layout.component";

// Routes
import { LayoutTestRoutingModule } from "./layout-routing.module";

@NgModule({
    declarations: [
        CardLayoutTestComponent,
        HeaderLayoutTestComponent,
        LayoutComponent
    ],
    imports: [
        CommonModule,
        LayoutTestRoutingModule
    ]
})
export class LayoutTestModule { }
