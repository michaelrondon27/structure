import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ButtonComponent } from './button.component';

// Modules
import { FundaeIconModule } from '../icon/icon.module';

@NgModule({
    declarations: [
        ButtonComponent
    ],
    imports: [
        CommonModule,
        FundaeIconModule
    ],
    exports: [
        ButtonComponent
    ]
})
export class FundaeButtonModule {
}
