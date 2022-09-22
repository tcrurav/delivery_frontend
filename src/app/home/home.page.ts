import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  description: string =  "Tururu";
  price: string = "20.20";

  constructor(private router: Router) {}

  goToMyMenu(){
    this.router.navigateByUrl("/my-menu");
  }

}
