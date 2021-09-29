import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { ContadorDirective } from './directives/contador.directive';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ContadorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
