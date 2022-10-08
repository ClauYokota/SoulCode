import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBnt]'
})
export class BntDirective {

  @Input()
  background: string = '#e5932f'

  constructor(
    private referencia: ElementRef<HTMLButtonElement>
    ) { 
    this.referencia.nativeElement.style.backgroundColor = this.background
    this.referencia.nativeElement.style.border = 'none'
    this.referencia.nativeElement.style.color = 'white'
    this.referencia.nativeElement.style.display = 'block'
  }
 
  ngOnInit():void{
    this.referencia.nativeElement.style.backgroundColor = this.background
  }

}
