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
  selector: 'app-football-category',
  templateUrl: './football-category.component.html',
  styleUrls: ['./football-category.component.css']
})
export class FootballCategoryComponent implements OnInit {
  sub:Subscription 
  allfootnews :news[]=[]
  
  constructor(private ServiceService: ServiceService) { }

  ngOnInit() {

  this.getallsportnews();
  this.sub=interval(180000).subscribe((val)=>{this.getallsportnews(); });
  }
  getallsportnews(){
    this.allfootnews=[]
    this.ServiceService.getAllsportnews().subscribe(data => {
      console.log(data);
      for(let d in data ){
        if(data[d]["categorie"]=="Football")
        this.allfootnews.push(data[d])

       } 
    }),
    error => console.log(error);
  }

}
