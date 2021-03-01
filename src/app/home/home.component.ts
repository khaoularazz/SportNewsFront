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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 sub:Subscription 
 centrville:any
  news :news[]=[]
  tennisnews :news[]=[]
  footnews :news[]=[]
  golfnews :news[]=[]
  alltennisnews :news[]=[]
  cyclnews :news[]=[]
  allcyclnews :news[]=[]
  allgolfnews :news[]=[]
  allfootnews :news[]=[]
  
  constructor(private ServiceService: ServiceService) { }

  ngOnInit() {
this.getsportnews();
  this.getallsportnews();
    this.sub=interval(180000).subscribe((val)=>{this.getallsportnews(); this.getsportnews();});
  }
  getallsportnews(){
    this.allgolfnews=[]
    this.allfootnews=[]
    this.alltennisnews=[]
    this.cyclnews=[]
    this.ServiceService.getAllsportnews().subscribe(data => {
      console.log(data);
      for(let d in data ){
        if(data[d]["categorie"]=="Football")
        this.allfootnews.push(data[d])
        if(data[d]["categorie"]=="Tennis")
        this.alltennisnews.push(data[d])
        if(data[d]["categorie"]=="Golf")
        this.allgolfnews.push(data[d])
        if(data[d]["categorie"]=="Cyclisme")
        this.allcyclnews.push(data[d])
       } for(let i=0;i<4;i++){
          this.footnews[i]=this.allfootnews[i]
          this.tennisnews[i]=this.alltennisnews[i]
          this.golfnews[i]=this.allgolfnews[i]
          this.cyclnews[i]=this.allcyclnews[i]
          console.log(i)
        }
      
      console.log(this.footnews)
      console.log(this.tennisnews)
    }),
    error => console.log(error);
  }
  getsportnews(){
    this.ServiceService.getsportnews().subscribe(data => {
      console.log(data);
      for(let d in data ){
        this.news[d]=data[d]
      }
      console.log(this.news)
    }),
    error => console.log(error);
  }

}
