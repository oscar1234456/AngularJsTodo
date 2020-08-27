import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent{
  @Input('item') todo; //decorater幫component開個洞 //對外面使用者是property
  @Input() idx;

  @Output() remove = new EventEmitter(); //對外是event

 

  remTodo(idx){
    this.remove.emit(idx);
  }

  complete(){}

}
