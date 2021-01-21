
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css']
})
export class UpdateAgentComponent implements OnInit {

  private id : any;
  public user: any;
  validateForm: FormGroup

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private aService : AgentService) { }

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
      name: [null, [Validators.required]],
      pib: [null, [Validators.required]],
      bankAccountNumber: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });
  }

  public getDetails(): void {
    this.aService.getAgent(this.user.id).subscribe(data =>{
      console.log(data);
      const formValues = {
        name: data.name,
        pib: data.pib,
        bankAccountNumber: data.bankAccountNumber,
        address: data.address
      }
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    this.aService.updateAgent(this.user.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`home-page`);
    }, error => {
      alert('Error');
    })
  }

}