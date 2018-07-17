import { Directive, Renderer2, ElementRef, HostListener, HostBinding, style, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appCampoColorido') cor = 'gray';

  @HostBinding('style.background-color') corDefundo: string;

  constructor() {

  }

  @HostListener('focus') onfocus() {
    this.corDefundo = this.cor;
  }

  @HostListener('blur') onblur() {
    this.corDefundo = 'transparent';
  }





 /*  @HostBinding('style.backgroundColor') corDeFundo: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

   @HostListener('focus') onFocus() {
    console.log(this.elementRef.nativeElement);
    this.renderer.setStyle(this.elementRef.nativeElement,  'background-color', 'yellow');
    this.corDeFundo = 'yellow';
  }

  @HostListener('blur') aoSair() {
    console.log(this.elementRef.nativeElement);
    this.renderer.setStyle(this.elementRef.nativeElement,  'background-color', 'transparent');
    this.corDeFundo = 'transparent';
  }

  @HostListener('focus') onFocus() {
    this.corDeFundo = 'yellow';
  }

  @HostListener('blur') aoSair() {
    this.corDeFundo = 'transparent';
  } */
}
