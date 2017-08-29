import { Component, OnInit,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
@Output ('data-added') sendData = new EventEmitter<any>();
student;
studNo: string;
studFname: string;
studLname: string;
studProg: string;
studYr: number;

constructor(){}
getStudent() {

  this.student= {
    studNumber: this.studNo,
    studFirstName: this.studFname,
    studLastName: this.studLname,
    studProgram: this.studProg,
    studYear: this.studYr
  };

  this.sendData.emit(this.student);
  }
  
clearValues(): void{
  this.studNo = null;
  this.studFname = null;
  this.studLname = null;
  this.studProg = null;
  this.studYr = null;
  }
addClicked(event){
this.sendData.emit(true);
}
ngOnInit() {}
}