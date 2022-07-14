import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ListserviceService } from '../listservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.css']
})
export class ListcomponentComponent implements OnInit {
  
  data : Array<any> = []
  errormessage:String = ""
  loading:Boolean = true
  error:boolean = false

  constructor(private _listservice:ListserviceService,private router:Router) { }


  //fetching data by get method and storing it into a variable


  ngOnInit(): void {
    //deprecated

    // this._listservice.fetchdata().subscribe(data => {
    //   this.data = data
    //   this.loading = false
    // },
    // error => {
    //   this.errormessage = error
    //   this.loading = false
    // })

    //new method

    this._listservice.fetchdata().subscribe({
      next: data => {
        this.data = data
        this.loading = false
      },
      error: error => {
        this.errormessage = error.message
        this.loading = false
        this.error = true
      }
    })
  }

  onNavigate(item:Product){
     this.router.navigate(['/productdetail',item.id],{state:item})
  }


}
