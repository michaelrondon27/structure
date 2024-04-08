import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { BreadcrumbComponent } from './breadcrumb.component';

// Modules
import { FundaeIconModule } from '@shared/components/icon/icon.module';

@NgModule({
    declarations: [
        BreadcrumbComponent
    ],
    exports: [
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        FundaeIconModule,
        RouterModule
    ]
})
export class FundaeBreadcrumbModule { }
