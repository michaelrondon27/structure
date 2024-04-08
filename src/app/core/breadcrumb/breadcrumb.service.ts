import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Interfaces
import { BreadCrumb } from '@shared/interfaces/breadcrumb.interface';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {

    public routes$: BehaviorSubject<BreadCrumb[]> = new BehaviorSubject<BreadCrumb[]>([]);

    /**
     * Function that set the breacrumb of the page where it is use
     * @param breadcrumbs data to show
     */
    setBreadcrumb(breadcrumbs: BreadCrumb[]): void {
        this.routes$.next(breadcrumbs);
    }

}
