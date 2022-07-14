import { Component, OnInit } from '@angular/core';
import { ListserviceService } from '../listservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-listdetailscomponent',
  templateUrl: './listdetailscomponent.component.html',
  styleUrls: ['./listdetailscomponent.component.css']
})
export class ListdetailscomponentComponent implements OnInit {
 
  productid :number;
  data:Product



  constructor(private route:ActivatedRoute,private router:Router) { 
    this.data = this.router.getCurrentNavigation()?.extras.state ?? {}
  }



  ngOnInit(): void {
     this.productid = Number(this.route.snapshot.paramMap.get('id')) 
     console.log(this.data,'data')
  }

  goBack(){
    let selectedid = this.productid
    this.router.navigate(['/products',{id:selectedid}])
  }

}
