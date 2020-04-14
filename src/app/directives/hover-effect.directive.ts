import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.textDeco('#00BFFF')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.textDeco('#708090')
  }


  private textDeco(color: string){
    this.elem.nativeElement.style.color = color;
  }

}
