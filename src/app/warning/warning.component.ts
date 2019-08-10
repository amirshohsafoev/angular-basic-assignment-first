import { Component } from "@angular/core";

@Component({
  selector: "app-warning",
  template: `
    <h3>Holly Cow</h3>
    <app-success></app-success>
  `,
  styleUrls: ["./warning.component.css"]
})
export class WarningComponent {}
