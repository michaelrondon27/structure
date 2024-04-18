import { Component } from '@angular/core';

// Interfaces
import { CustomComponent } from '@shared/interfaces/custom-component.interface';

// Services
import { LayoutTestService } from '../../layout.service';

@Component({
    selector: 'tests-card-layout',
    templateUrl: 'card-layout-test.component.html',
    styleUrls: [
        'card-layout-test.component.scss'
    ]
})
export class CardLayoutTestComponent {

    public components: CustomComponent[] = [];

    constructor(
        private layoutTestService: LayoutTestService
    ) {
        this.components = this.layoutTestService.components;
    }

}
