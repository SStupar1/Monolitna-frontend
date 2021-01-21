import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  validateForm: FormGroup
  public user: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private adminService : AdminService) { }

  ngOnInit(): void {
    this.setupUser();
    this.setupForm();
    this.getDetails();
  }

  public setupForm(): void {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  } 

  public getDetails(): void {
    this.adminService.getAdmin(this.user.id).subscribe(data =>{
      console.log(data);
      const formValues = {
        firstName: data.firstName,
        lastName: data.lastName
      }
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    this.adminService.updateAdmin(this.user.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`home-page`);
      console.log(data);
    }, error => {
      alert('Error');
    })
  }

}
