import { Component, OnInit } from '@angular/core';
import { First } from "../../First";

@Component({
  selector: 'app-firstproject',
  templateUrl: './firstproject.component.html',
  styleUrls: ['./firstproject.component.css']
})
export class FirstprojectComponent implements OnInit {
  localItem: string | null;
  first : First[];
  
  constructor() { 
    this.localItem = localStorage.getItem("first");
    if(this.localItem == null){
    this.first=[];
    }
    else{
      this.first = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deletefirst(first:First){
   console.log(First);
   const index = this.first.indexOf(first);
   this.first.splice(index,1)
   localStorage.setItem("first", JSON.stringify(this.first));
  }
  addfirst(first:First){
    console.log(First);
    this.first.push(first);
    localStorage.setItem("first", JSON.stringify(this.first));
   }

   togglefirst(first:First){
    const index = this.first.indexOf(first);
    this.first[index].active= !this.first[index].active;
    localStorage.setItem("first", JSON.stringify(this.first));
    console.log(first);
   }
 

}
