import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-part-listt',
  templateUrl: './part-listt.component.html',
  styleUrls: ['./part-listt.component.css']
})
export class PartListtComponent implements OnInit {
  data:any;
  parts:Observable<object> | undefined
  search:any;

  do:any;

  order: string = '';

 

  p: number = 1;
  collection: any[] | undefined ; 

  constructor(private deta:DetailsService,private rout:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.deta.getParts().subscribe((de)=>{
      this.data=de
      this.data=this.data?.reverse()
      // const my=this.data.name
      // console.log(parsedObj);
      //  console.log(this.data) 
      // this.sorName(my)
      // console.log(parsedObj.name)     
    })
  }

  searchon(){
    this.deta.seacrchParts(this.search).subscribe((to)=>{
        this.data=to
    })
  }

  editParts(id: number,name:string,price:number,shelve_number:number){
    // console.log(id)
      this.rout.navigate(['edit',id,name,price,shelve_number]);
  }


  isDesend:boolean=true;
  sorName(property: string | number){
    this.isDesend=!this.isDesend

    let direction=this.isDesend ? 1:-1 ;
    this.data.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(a[property]<b[property])
      {
        return -1*direction;
      }
      else if(a[property]>b[property])
      {
        return 1*direction;
      }
      else{
        return 0;
      }
    })
  }

  
  sorts(){
      this.order='name'
  }

}
