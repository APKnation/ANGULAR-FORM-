import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component'; // Import the component

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    TemplateFormComponent
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}