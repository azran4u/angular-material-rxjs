import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() open: boolean = true;
  @Output() login = new EventEmitter<void>();
  @ViewChild('snav') sidenav: MatSidenav;

  constructor() {}
  ngOnInit(): void {
    this.toggle();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.toggle();
  }
  ngAfterViewInit(): void {
    // this.toggle();
  }

  toggle() {
    if (this.sidenav) {
      if (this.open) {
        console.log(`sidenav opened`);
        this.sidenav.open();
      } else {
        console.log(`sidenav closed`);
        this.sidenav.close();
      }
    }
  }
  loginClicked() {
    this.login.emit();
    console.log(`login clicked`);
  }
}
