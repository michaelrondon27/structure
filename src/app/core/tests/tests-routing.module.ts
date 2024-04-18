import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutTestModule)
    },
    {
        path: 'icons',
        loadChildren: () => import('./icon-test/icon-test.module').then(m => m.IconTestModule)
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class TestsRoutingModule { }
