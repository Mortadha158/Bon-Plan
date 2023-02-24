import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../Models/usermodel';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  usr: user= new user()
  inputForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.inputForm = this.fb.group(
      {
        "name": ["", Validators.required],
        "email": ["", [Validators.required,Validators.email]],
        "password": ["", Validators.required]
      }
   )

  }
  onsubmit() {
    if (this.inputForm.valid)
    {
      this.usr.name = this.inputForm.controls['name'].value;
      this.usr.email = this.inputForm.controls['email'].value;
      this.usr.password = this.inputForm.controls['password'].value;
    }
  }
}
