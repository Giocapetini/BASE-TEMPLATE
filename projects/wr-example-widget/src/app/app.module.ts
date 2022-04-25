import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WrExampleComponentModule } from '../../../wr-example-component/src/lib/wr-example-component.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WrExampleComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
