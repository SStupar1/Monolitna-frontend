import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  model: any = {}

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  
  }

  onButtonClickRegistration():void{
    this.router.navigate(['front-page/register-simple-user']);
  }

  onButtonClickLogin():void{
    this.router.navigate(['front-page/login']);
  } 

}
