import { Component, ViewChild } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ElementLifeDirective } from './element-life.directive'

@Component({
  template: '<div element-life (init)="init()" (viewInit)="viewInit()" (destroy)="destroy()"></div>'
})
class TestComponent {
  isInit = false
  isViewInit = false
  isDestroyed = false
  @ViewChild(ElementLifeDirective, {
    static: true
  }) elInit: ElementLifeDirective | null = null

  init() {
    this.isInit = true
  }

  viewInit() {
    this.isViewInit = true
  }

  destroy() {
    this.isDestroyed = true
  }
}

describe('ElementLifeDirective', () => {
  let component: TestComponent
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ElementLifeDirective]
    })
    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
  })

  it('should emit when ngOnInit is called', () => {
    fixture.detectChanges()

    component.elInit!.ngOnInit()
    fixture.detectChanges()

    expect(component.isViewInit).toBe(true)
  })

  it('should emit when afterViewInit is called', () => {
    fixture.detectChanges()

    component.elInit!.ngAfterViewInit()
    fixture.detectChanges()

    expect(component.isViewInit).toBe(true)
  })

  it('should emit when destroy is called', () => {
    fixture.detectChanges()

    component.elInit!.ngOnDestroy()
    fixture.detectChanges()

    expect(component.isDestroyed).toBe(true)
  })
})
