import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  items: any = [];

  constructor( 
    private itemService: ItemService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAllItems();
  }

  ionViewDidEnter(){
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.getItems().subscribe(response => {
      this.items = response;
    });
  }

  deleteItem(id) {
    console.log('Id='+id);
    this.itemService.deleteItem(id).subscribe(() => {
      this.ionViewDidEnter();
      console.log('Deleted item');
    });
  }  

  // updateItem(id){
  //   console.log('En el list --> id='+id);
  //   // this.router.navigateByUrl(`/update/${id}`);
  //   this.router.navigateByUrl(`/update${id}`);
  // }

  goBack(){
    this.router.navigateByUrl("/home");
  }
  
}