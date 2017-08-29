import { Component, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@Output () sendOutput= new EventEmitter <any>();
@Input () studentList = [];
dataCollection = [];
printFlag = false;
printProceed;

getData(event){
this.dataCollection = event;
console.log(event);
}

printData(event){
this.printFlag = event;
console.log(event);
if(this.printFlag){
  if(this.dataCollection.length == 0)
	this.printProceed = false;
else
	this.printProceed = true;
}
}
}

