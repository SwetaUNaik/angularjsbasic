import { Component,EventEmitter, OnInit,Output } from '@angular/core';
import { First } from 'src/app/First';


@Component({
  selector: 'app-add-first',
  templateUrl: './add-first.component.html',
  styleUrls: ['./add-first.component.css']
})
export class AddFirstComponent implements OnInit {
  title:string;
  desc:string;
  @Output() firstAdd: EventEmitter<First> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const first ={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.firstAdd.emit(first);

  }

}
