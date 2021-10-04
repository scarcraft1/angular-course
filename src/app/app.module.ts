import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { ShowModalDirective } from './directives/show-modal.directive';


@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ShowModalDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
