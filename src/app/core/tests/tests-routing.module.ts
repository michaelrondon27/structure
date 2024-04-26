import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutTestModule)
    },
    {
        path: 'buttons',
        loadChildren: () => import('./button-test/button-test.module').then(m => m.ButtonTestModule)
    },
    {
        path: 'icons',
        loadChildren: () => import('./icon-test/icon-test.module').then(m => m.IconTestModule)
    },
    {
        path: 'img',
        loadChildren: () => import('./img-test/img-test.module').then(m => m.ImgTestModule)
    },
    {
        path: 'input',
        loadChildren: () => import('./input-test/input-test.module').then(m => m.InputTestModule)
    },
    {
        path: 'textarea',
        loadChildren: () => import('./textarea-test/textarea-test.module').then(m => m.TextareaTestModule)
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
