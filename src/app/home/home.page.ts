import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToMyList(){
    //this.router.navigateByUrl("/my-menu");
    this.router.navigateByUrl("/list");
  }

  goToCreate(){
    this.router.navigateByUrl("/create");
  }  

  goToStart(){
    this.router.navigateByUrl("/");
  }  

}
