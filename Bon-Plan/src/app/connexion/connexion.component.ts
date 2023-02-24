import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  test = "";
inputFormulaire!: FormGroup;
  constructor(private fb: FormBuilder, private route: Router)
  {
    this.inputFormulaire = this.fb.group(
      {
        "inputEmail": ["", [Validators.required, Validators.email]],
        "inputPassword": ["", [Validators.required]]
      }
    )
  }
  ngOnInit(): void{ }

  onSubmit() {
    console.log(this.inputFormulaire)
    if (this.inputFormulaire.invalid) { this.test = "Formulaire ghalet !!"; }
    else{this.route.navigate(["/home"])}
  }
}
