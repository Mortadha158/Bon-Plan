import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{ path: "home", component: HomeComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "connexion", component: ConnexionComponent },
  { path: "test", component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
