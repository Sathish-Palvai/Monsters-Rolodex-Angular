import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
