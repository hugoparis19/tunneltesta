import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from "app/heroes/heroes.component";
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { HeroDetailComponent } from "app/hero-detail/hero-detail.component";
import { HeroSearchComponent } from "app/hero-search/hero-search.component";
import { HeroFormComponent } from "app/hero-form/hero-form.component";
import { HeroFormTemplateDrivenComponent } from "app/hero-form-template-driven/hero-form-template-driven.component";
import { HeroFormReactiveComponent } from "app/hero-form-reactive/hero-form-reactive.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }, {
    path: 'heroe-form',
    component: HeroFormComponent
  }, {
    path: 'heroe-form-template-driven',
    component: HeroFormTemplateDrivenComponent
  }, {
    path: 'heroe-form-reactive',
    component: HeroFormReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
