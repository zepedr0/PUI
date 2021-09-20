import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onOver() {
    this.highlight('lavender');
  }

  @HostListener('mouseout') onOut() {
    this.highlight('');
  }

  private highlight(color: string) {
    if (this.el.nativeElement.style.backgroundColor !== 'red')  
      this.el.nativeElement.style.backgroundColor = color;
  }
}
