import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
@Output () add = new EventEmitter<any> ();
@Input () student;
studentCollection = [];
  constructor() { }
  ngOnInit() {}

onAdd(){
  this.studentCollection.push(this.student);
  }
getStudColl(){
  this.add.emit(this.studentCollection);
}
}
