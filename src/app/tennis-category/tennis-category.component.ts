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
  selector: 'app-tennis-category',
  templateUrl: './tennis-category.component.html',
  styleUrls: ['./tennis-category.component.css']
})
export class TennisCategoryComponent implements OnInit {
  sub:Subscription 
  alltennisnews :news[]=[]

  
  constructor(private ServiceService: ServiceService) { }

  ngOnInit() {

  this.getallsportnews();
  this.sub=interval(180000).subscribe((val)=>{this.getallsportnews(); });
  }
  getallsportnews(){
    this.alltennisnews=[]
    this.ServiceService.getAllsportnews().subscribe(data => {
      console.log(data);
      for(let d in data ){
        if(data[d]["categorie"]=="Tennis")
        this.alltennisnews.push(data[d])
       } 
    }),
    error => console.log(error);
  }
}
