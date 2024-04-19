import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ComponentSpecificationsComponent } from './component-specifications.component';

@NgModule({
    declarations: [
        ComponentSpecificationsComponent
    ],
    exports: [
        ComponentSpecificationsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentSpecificationsModule { }
