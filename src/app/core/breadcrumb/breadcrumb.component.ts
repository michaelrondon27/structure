import { Component, OnInit } from '@angular/core';

// Interfaces
import { BreadCrumb } from '@shared/interfaces/breadcrumb.interface';
import { Icon } from '@shared/interfaces/icon.interface';

// Services
import { BreadcrumbService } from './breadcrumb.service';

@Component({
    selector: 'fundae-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {

    public icon: Icon = {
        name: 'chevron-right',
        size: '2xs',
        type: 'fas'
    };
    public routes: BreadCrumb[] = [];

    constructor(
        private breadcrumbService: BreadcrumbService
    ) { }

    ngOnInit(): void {
        this.breadcrumbService.routes$.subscribe(routes => this.routes = routes);
    }
}
