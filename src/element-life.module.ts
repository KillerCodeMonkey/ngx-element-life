import { NgModule } from '@angular/core'
import { ElementLifeDirective } from './element-life.directive'

@NgModule({
  declarations: [
    ElementLifeDirective
  ],
  exports: [
    ElementLifeDirective
  ]
})
export class ElementLifeModule {}
