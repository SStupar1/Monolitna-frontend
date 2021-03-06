import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuelTypeService } from 'src/app/services/fuel-type.service';
@Component({
  selector: 'app-update-fuel-type',
  templateUrl: './update-fuel-type.component.html',
  styleUrls: ['./update-fuel-type.component.css']
})
export class UpdateFuelTypeComponent implements OnInit {

  private id : any;
  validateForm: FormGroup;
  public user: any;

  constructor(private route: ActivatedRoute, private ftService: FuelTypeService, private fb: FormBuilder, private router: Router) { }

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
      type: [null, [Validators.required]],
      tankCapacity: [null, [Validators.required]]
    });
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
        this.ftService.getFuelType(this.id).subscribe(data =>{
      const formValues = {
        type: data.type,
        tankCapacity : data.tankCapacity
      }
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
    this.ftService.updateFuelType(this.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`home-page/lists/fuel-types`);
    }, error => {
      alert('Error');
    })
    
    
  }


}
