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
  selector: 'app-cycling-category',
  templateUrl: './cycling-category.component.html',
  styleUrls: ['./cycling-category.component.css']
})
export class CyclingCategoryComponent implements OnInit {
  sub:Subscription 
  allcyclnews :news[]=[]
  constructor(private ServiceService: ServiceService) { }

  ngOnInit() {

  this.getallsportnews();
  this.sub=interval(180000).subscribe((val)=>{this.getallsportnews(); });
  }
  getallsportnews(){
    this.allcyclnews=[]
    this.ServiceService.getAllsportnews().subscribe(data => {
      console.log(data);
      for(let d in data ){
        if(data[d]["categorie"]=="Cyclisme")
        this.allcyclnews.push(data[d])
       } 
    }),
    error => console.log(error);
  }


}
