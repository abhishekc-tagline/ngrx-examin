import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { userLogin } from 'src/app/store/actions/auth.actions';
// import { userLogin } from 'src/app/store/actions/auth.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private toastService: ToastService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get loginFromControl() {
    return this.loginForm.controls;
  }

  loginUser() {
    console.log('LOGIN FORM ==> ', this.loginForm.value);
    if (this.loginForm.valid) {
      // console.log('LOGIN VALID VALUE ==> ', this.loginForm.value);
      this.submitted = false;
      this.store.dispatch(userLogin(this.loginForm.value));
      // this.authService.loginUser(this.loginForm.value).subscribe((res) => {
      //   console.log('LOGIN RES =====> ', res);
      //   if (res.statusCode === 200) {
      //     // this.toastService.toast('success', res.message);
      //     // this.router.navigate(['teacher/student']);
      //     // localStorage.setItem('access-token', res.data.token);
      //     // localStorage.setItem('role', res.data.role);
      //   }
      // })
      this.loginForm.reset();
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
}
