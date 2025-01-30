import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  standalone: true, // Keep this line
  imports: [FormsModule], // Import required modules here
})
export class TemplateFormComponent {
  onSubmit(form: NgForm) {
    console.log('Form Submitted!', form.value);
  }
}