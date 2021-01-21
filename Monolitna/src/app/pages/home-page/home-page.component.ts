import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public isAdmin: boolean = false;
  public isAgent: boolean = false;
  public isSimpleUser: boolean = false;
  public user: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
   this.setupUser();
   this.setupUserType();
   console.log(this.isSimpleUser);
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  } 
  private setupUserType(): void {
    if(this.user.userRole === 'ADMIN'){
      this.isAdmin = true;
    }else if(this.user.userRole === 'AGENT'){
      this.isAgent = true;
    }else if(this.user.userRole === 'SIMPLE_USER'){
      this.isSimpleUser = true;
    }
  }

  updateAdmin():void{
    this.router.navigate(['home-page/updates/update-admin']);
  } 

  updateAgent():void{
    this.router.navigate(['home-page/updates/update-agent']);
  } 

  updateSimpleUser():void{
    this.router.navigate(['home-page/updates/update-simple-user']);
  } 


  registrationRequests(): void {
    this.router.navigate(['home-page/lists/registration-request']);
  }

  registerAgent(): void {
    
    this.router.navigate(['home-page/register-agent']);
    
  }

  public clearStorage(): void {
    localStorage.clear();
    this.router.navigateByUrl('front-page');
  }
}
