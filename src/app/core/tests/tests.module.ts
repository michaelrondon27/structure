import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TestsComponent } from './tests.component';

// Routes
import { TestsRoutingModule } from './tests-routing.module';

@NgModule({
    declarations: [
        TestsComponent
    ],
    imports: [
        CommonModule,
        TestsRoutingModule
    ]
})
export class TestsModule { }
