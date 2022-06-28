import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { First } from 'src/app/First';


@Component({
  selector: 'app-first-item',
  templateUrl: './first-item.component.html',
  styleUrls: ['./first-item.component.css']
})

export class FirstItemComponent implements OnInit {
  @Input() first : First;
  @Input() i:number;
  @Output() firstDelete: EventEmitter<First> = new EventEmitter();
  @Output() firstCheckbox: EventEmitter<First> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onclick(first:First){
    this.firstDelete.emit(first);
    console.log("onclick has been triggered")
  }
  onCheckboxClick(first:First){
    console.log("first")
    this.firstCheckbox.emit(first)
   
  }
}
