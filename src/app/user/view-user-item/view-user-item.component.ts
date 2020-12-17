import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-view-user-item',
  templateUrl: './view-user-item.component.html',
  styleUrls: ['./view-user-item.component.less'],
})
export class ViewUserItemComponent implements OnInit {
  @Input() user: User;
  @Output() deleted = new EventEmitter<void>();
  @Output() edited = new EventEmitter<User>();

  constructor(private formBuilder: FormBuilder) {}

  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: [{ value: this.user.id, disabled: true }, Validators.required],
      username: ['', Validators.required],
    });
  }

  delete() {
    console.log(`delete id ${this.user.id}`);
    this.deleted.emit();
  }

  onSubmit() {
    const input: User = this.formGroup.getRawValue();
    console.log(`edit name ${JSON.stringify(input)}`);
  }
}
