import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBounce]'
})
export class BounceDirective {

  @HostListener('click')onClick() {
    this.element.nativeElement.classList.add('animate');
  }

  @HostListener('mouseup')mouseUp() {
    this.element.nativeElement.classList.remove('animate');
  }


  // @Input() set appBounce(value:boolean){
  //   if(value)
  //     this.element.nativeElement.classList.add('animate')
  // }
  constructor(private element: ElementRef) { }

}
