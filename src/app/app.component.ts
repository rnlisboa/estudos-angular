import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateBidingComponent } from './components/template/template-biding/template-biding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateFlowComponent } from './components/template/template-flow/template-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from './components/signals/signals.component';
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!-- <router-outlet></router-outlet> -->
    <h1>Curso de Angular</h1>
    <h2>Components</h2>

    <!-- <app-template-biding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-flow/> -->
    <!-- <app-template-deferrable-views /> -->
    <!-- <app-signals> </app-signals> -->
    <!-- <app-pai-ou-mae /> -->
    <app-angular-pipes />
  `,
  imports: [
    CommonModule,
    RouterOutlet,
    TemplateBidingComponent,
    TemplateVariablesComponent,
    TemplateFlowComponent,
    TemplateDeferrableViewsComponent,
    SignalsComponent,
    PaiOuMaeComponent,
    AngularPipesComponent,
  ],
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
