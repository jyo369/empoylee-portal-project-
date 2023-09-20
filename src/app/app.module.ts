import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeImageComponent } from './employee-image/employee-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeImageComponent,
    HighlightedDirective,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
