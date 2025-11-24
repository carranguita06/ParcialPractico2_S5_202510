import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredienteListComponent } from './ingrediente-list/ingrediente-list.component';



@NgModule({
  declarations: [IngredienteListComponent],
  imports: [CommonModule],
  exports: [IngredienteListComponent]
})

export class IngredienteModule {
  
}
