import { NgModule } from '@angular/core';
import { BrowserModule,provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IngredienteModule } from './ingrediente/ingrediente.module';
import { RecetaModule } from './receta/receta.module';

import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IngredienteModule,
    RecetaModule,

  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi(), withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
