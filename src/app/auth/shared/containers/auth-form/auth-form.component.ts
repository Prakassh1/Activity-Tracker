import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '@app/auth/register/PasswordValidaor';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: [ './auth-form.component.scss' ]
})
export class AuthFormComponent {

  @Output()
  submitted = new EventEmitter<FormGroup>();

  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(8),
      PasswordValidator.strong
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) {}

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  get passwordInvalid() {
    const control = this.form.get('password');
    console.log(control.errors);
    return (control.hasError('required')
    //  || control.hasError('strong') || control.hasError('maxlength')
     ) && control.touched;
  }

  get passwordMinInvalid() {
    const control = this.form.get('password');
    console.log(control.errors);
    return (control.hasError('minlength')) && control.touched;
  }

  get passwordMaxInvalid() {
    const control = this.form.get('password');
    console.log(control.errors);
    return (control.hasError('maxlength')) && control.touched;
  }

  get passwordStrong() {
    const control = this.form.get('password');
    console.log(control.errors);
    return (control.hasError('strong')) && control.touched;
  }

  get emailFormat() {
    const control = this.form.get('email');
    return control.hasError('email') && control.touched;
  }

}
