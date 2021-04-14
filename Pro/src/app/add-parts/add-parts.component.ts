import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';
import { Parts } from '../parts';

@Component({
  selector: 'app-add-parts',
  templateUrl: './add-parts.component.html',
  styleUrls: ['./add-parts.component.css']
})
export class AddPartsComponent implements OnInit {
  data:any;
  partss: Parts=new Parts();
  constructor(private detail:DetailsService,private route:Router) { }

  ngOnInit(): void {
    
  }

  onsubmit(){
    this.detail.createParts(this.partss).subscribe((dat)=>{
      // console.log(dat)
      this.partss=new Parts()
      this.route.navigateByUrl('')
    },error=>console.log("error is"+error)
    );
  }

}
