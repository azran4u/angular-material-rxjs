import {
  Input,
  Component,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginData } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements AfterViewInit {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter<LoginData>();

  form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(5),
    ]),
  });

  ngAfterViewInit(): void {}

  onSubmit() {
    if (!this.form.invalid) {
      this.submitEM.emit({ username: this.form.get('username').value });
    }
  }
}
