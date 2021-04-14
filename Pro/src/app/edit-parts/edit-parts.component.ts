import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../details.service';
import { Parts } from '../parts';


@Component({
  selector: 'app-edit-parts',
  templateUrl: './edit-parts.component.html',
  styleUrls: ['./edit-parts.component.css']
})
export class EditPartsComponent implements OnInit {
  id: any;
  name:any;
  

  part: Parts=new Parts();
  constructor(private route: ActivatedRoute,private details:DetailsService,private routes:Router) { }

     routeParams = this.route.snapshot.paramMap;
     partsname=this.route.snapshot.paramMap.get('name')
     partsId=this.route.snapshot.paramMap.get('id')
     partsPrice=this.route.snapshot.paramMap.get('price')
     partsSNumber=this.route.snapshot.paramMap.get('shelve_number')
    //  productIdFromRoute = Number(this.routeParams.get('id'));
    // productNameFromRoute = Number(this.routeParams.get('name'));

  ngOnInit(): void {
    console.log(this.partsId)
    // console.log(this.partsId)
    console.log(this.partsname)
    this.part.name=this.partsname
    this.part.price=this.partsPrice
    this.part.shelve_number=this.partsSNumber
  }

  onsubmits(){
    this.details.updateParts(this.partsId,this.part).subscribe((to)=>{
      console.log(to)
      this.part=new Parts()
      this.routes.navigateByUrl('/part')
    })
  }

}
