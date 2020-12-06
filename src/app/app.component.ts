import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-material-rxjs';

  openedChange(event: boolean) {
    console.log(`sidenav openedChange changed value=${event}`);
  }

  closedStart(event: void) {
    console.log(`sidenav closedStart changed value=${event}`);
  }
}
