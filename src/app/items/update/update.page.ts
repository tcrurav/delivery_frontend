import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  updateItemForm: FormGroup;
  id: any;

  constructor( 
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService
  ) {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
    console.log('En el update --> id='+this.id);
  }

  ngOnInit() {
    this.getItem(this.id);
    this.updateItemForm = this.formBuilder.group({
      description: [''],
      price: [''],
      actived: ['']
    })
  }

  getItem(id){
    console.log('getItem  -  id: '+this.id)
    this.itemService.getItem(this.id).subscribe( (data) => {
      this.updateItemForm.setValue({
        description: data['description'],
        price: data['price'],
        actived: data['actived']
      });
    });
  }

  goBack(){
    this.router.navigateByUrl("/home");
  }

  //(this.endpoint + '/' + id, item, this.httpOptions);
  onSubmit() {
    if (!this.updateItemForm.valid) {
       return false;
    } else {
      this.itemService
        .updateItem(this.id, this.updateItemForm.value)
        .subscribe(() => {
          this.updateItemForm.reset();
          this.router.navigate(['/list']);
        })
    }
  }  
}
