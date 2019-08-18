import { AfterViewInit, Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core'

@Directive({
  selector: '[element-life]'
})
export class ElementLifeDirective implements AfterViewInit, OnInit {
  @Output() init = new EventEmitter<ElementRef>()
  @Output() viewInit = new EventEmitter<ElementRef>()
  @Output() destroy = new EventEmitter<ElementRef>()

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.init.emit(this.elementRef)
  }

  ngAfterViewInit() {
    this.viewInit.emit(this.elementRef)
  }

  ngOnDestroy() {
    this.destroy.emit(this.elementRef)
  }
}
