import { Component, OnInit } from '@angular/core';
import { Subscription ,  interval} from 'rxjs';
import { ServiceService} from '../service.service';
type news = {
  id: string;
  title: string;
  image: string;
  url  :string;
  categorie : string
  date : Date
         
}
@Component({
  selector: 'app-golf-category',
  templateUrl: './golf-category.component.html',
  styleUrls: ['./golf-category.component.css']
})
export class GolfCategoryComponent implements OnInit {
  sub:Subscription 
  allgolfnews :news[]=[]
  
  constructor(private ServiceService: ServiceService) { }

  ngOnInit() {

  this.getallsportnews();
  this.sub=interval(180000).subscribe((val)=>{this.getallsportnews(); });
  }
  getallsportnews(){
    this.allgolfnews=[]
    this.ServiceService.getAllsportnews().subscribe(data => {
      console.log(data);
      for(let d in data ){
        if(data[d]["categorie"]=="Golf")
        this.allgolfnews.push(data[d])
       } 
    }),
    error => console.log(error);
  }
}
