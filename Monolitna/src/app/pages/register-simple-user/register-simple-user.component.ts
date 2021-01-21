import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-simple-user',
  templateUrl: './register-simple-user.component.html',
  styleUrls: ['./register-simple-user.component.css']
})
export class RegisterSimpleUserComponent implements OnInit {

  validateForm!: FormGroup;
 
  constructor(private router:Router,private fb: FormBuilder, private authService: AuthService) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

  const body = {
      username: this.validateForm.value.username,
      password: this.validateForm.value.password,
      rePassword: this.validateForm.value.rePassword,
      ssn: this.validateForm.value.ssn,
      address: this.validateForm.value.address,
      firstName: this.validateForm.value.firstName,
      lastName: this.validateForm.value.lastName
  }
  console.log(body);
  this.authService.registerSimpleUser(body).subscribe(data => {
    alert('Uspešno ste se registrovali!');
    this.router.navigateByUrl(`front-page/login`);
    
  }, error => {
    console.log(error);
  
    alert('Error')
  })
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required, this.confirmationValidator]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      address: [null, [Validators.required]],
      ssn: [null, [Validators.required]]
    });
  }

}
