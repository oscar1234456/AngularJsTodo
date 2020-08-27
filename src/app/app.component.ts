import { Component } from '@angular/core';
interface ToDo{
  item:string;
  isCompleted:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = this.someMethod();
  inputPlaceHolder = "What needs to be done??";
  cont = true;
  newTodo = ""
  todoList:ToDo[]=[
    {
      item: 'Taste JavaScript',
      isCompleted: true
    },
    {
      item: 'Buy ddd',
      isCompleted: false
    },
    {
      item: 'Buy sss',
      isCompleted: false
    },
  ]
  someMethod(){
    return Math.floor(9.5)
  }

  showInput(event){
    console.log(event);
    // event.target.value = ""
    this.todoList.push({item:event.target.value,isCompleted:false})
    this.newTodo = ""
  }
  destroy(idx){
    console.log(idx);
    this.todoList.splice(idx, 1)
  }

  complete(todo:ToDo){
    console.log(3);
    todo.isCompleted = !todo.isCompleted; 
  }
  countTotal(){
    console.log("total")
    return this.todoList.length
  }
  allClear(){
    this.todoList.forEach(todo=> {
      todo.isCompleted = false;
    });
  }

  allChecked(){
    // this.todoList.forEach(todo=> {
    //   todo.isCompleted = true;
    // });
    console.log("Checked!")
    this.todoList.forEach(todo=> {
      todo.isCompleted = true;
    });
  }

}

