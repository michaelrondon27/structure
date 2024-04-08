import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { IconComponent } from './icon.component';

@NgModule({
    declarations: [
        IconComponent
    ],
    exports: [
        IconComponent
    ],
    imports: [
        FontAwesomeModule
    ]
})
export class FundaeIconModule { }
