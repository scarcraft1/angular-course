import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { ShowModalDirective } from './directives/show-modal.directive';


@NgModule({
  declarations: [
    AppComponent,
    // ToolbarComponent,
    // ContentComponent
    ...COMPONENTS,
    ShowModalDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
