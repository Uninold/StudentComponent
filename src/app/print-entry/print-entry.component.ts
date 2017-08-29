import { Component, OnInit,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-print-entry',
  templateUrl: './print-entry.component.html',
  styleUrls: ['./print-entry.component.css']
})
export class PrintEntryComponent implements OnInit {
@Output () printData = new EventEmitter<any>();
@Input () studentCollection = [];
student;
  constructor() { }

  ngOnInit() {
  }
  onPrint(){
  
    this.printData.emit(this.studentCollection);
  }
 printStudents(){
    this.studentCollection.push(this.student);
  }
}
