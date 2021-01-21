import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationRequestService } from 'src/app/services/registration-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private route: ActivatedRoute,  private rrService: RegistrationRequestService,private router:Router,private fb: FormBuilder, private authService: AuthService) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const body = {
        username: this.validateForm.value.username,
        password: this.validateForm.value.password
    }
    console.log(body);
    this.authService.login(body).subscribe(data => {
      alert('Uspesno ste se logovali!');
      const user = data.userResponse;
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['home-page']);
      console.log(data);
      
    }, error => {
      console.log(error);
    
      alert('Error')
    })
  }

  

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    const id = this.route.snapshot.params.id;
    if(id != undefined){
      const body = {
        id: id
      }
      this.rrService.confirmRegistrationRequest(body).subscribe(() => {
        alert('Uspešno ste se registrovali!');
        this.router.navigateByUrl(`login`);
      },
      error => {
        alert("Error login");
      });
    }
  }

  onButtonClickRegistration(){
    this.router.navigate(['register-simple-user']);
  }

}
