
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SimpleUserService } from 'src/app/services/simple-user.service';

@Component({
  selector: 'app-update-simple-user',
  templateUrl: './update-simple-user.component.html',
  styleUrls: ['./update-simple-user.component.css']
})
export class UpdateSimpleUserComponent implements OnInit {

  private id : any;
  validateForm: FormGroup
  public user: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private suService : SimpleUserService) { }

  ngOnInit(): void {
    this.setupUser();
    this.setupForm();
    this.getDetails();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  } 

  public setupForm(): void {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      ssn: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.suService.getSimpleUser(this.user.id).subscribe(data =>{
      console.log(data);
      const formValues = {
        firstName: data.firstName,
        lastName: data.lastName,
        ssn: data.ssn,
        address: data.address
      }
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    this.suService.updateSimpleUser(this.user.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`home-page`);
    }, error => {
      alert('Error');
    })
  }

}

