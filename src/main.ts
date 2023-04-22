import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SharedDirectiveModule } from './directives/shared-directive/shared-directive.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SharedDirectiveModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a *appHideLink="shouldHideLink" target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
  shouldHideLink = true;
}

bootstrapApplication(App);
