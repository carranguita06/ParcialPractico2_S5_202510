import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaListComponent } from './receta-list/receta-list.component';



@NgModule({
  declarations: [RecetaListComponent],
  imports: [
    CommonModule
  ],
  exports:[RecetaListComponent]
})

export class RecetaModule { }
