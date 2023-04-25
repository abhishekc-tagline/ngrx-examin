import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { userSignup } from 'src/app/store/actions/auth.actions';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private toastService: ToastService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  get signuoFromControl() {
    return this.signupForm.controls;
  }

  signupUser() {
    console.log('SIGNUP FORM  ==> ', this.signupForm.value);
    
    if (this.signupForm.valid) {
      // console.log('SIGNUP VALID VALUE ==> ', this.signupForm.value);
      this.submitted = false;

      const reqBody = {
        ...this.signupForm.value,
        role: 'student',
      };

      delete reqBody.confirmPassword;
      this.store.dispatch(userSignup(reqBody))

      // this.authService.signupUser(reqBody).subscribe((res) => {
      //   console.log('SIGNUP RES =====> ', res);

      //   if (res.statusCode === 200) {
      //     // this.signupForm.reset();
      //     // setTimeout(() => {
      //     // this.toastService.toast('success', res.message);
      //     // });
      //     // this.router.navigate(['/']);
      //   }
      // })
    } else {
      this.submitted = true;
      return;
    }
  }

  validation(name: string | null, type: string | null) {
    if (type === null) {
      return name + ' ' + 'is required';
    } else {
      return type;
    }
  }

  validatePassword(): boolean {
    if (this.signuoFromControl['password'].value === this.signuoFromControl['confirmPassword'].value) {
      return true;
    } else {
      return false;
    }
  }
}
