import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent {
  value = 'Build and Deploy Srm App from GitHub in Azure Cloud ';
}
