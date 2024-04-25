import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es';

// Components
import { AppComponent } from './app.component';

// Routes
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localeEs);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es-ES' },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
