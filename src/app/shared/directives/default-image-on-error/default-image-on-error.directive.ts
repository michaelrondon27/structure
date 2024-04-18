import { Directive, HostListener, Input, NgModule } from '@angular/core';

@Directive({
  selector: '[showDefaultOnError]'
})
export class DefaultImageOnErrorDirective {
    @Input() defaultImageOnError: string;

    @HostListener('error', ['$event'])
    handleError(event: ErrorEvent): void {
        (event.target as HTMLImageElement).src = this.defaultImageOnError;
    }
}

@NgModule({
    declarations: [
        DefaultImageOnErrorDirective
    ],
    exports: [
        DefaultImageOnErrorDirective
    ]
})
export class DefaultImageOnErrorDirectiveModule {}
