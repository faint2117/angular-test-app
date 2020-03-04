import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToDo } from '../../models/to-do/to-do';

@Component({
  selector: 'adv-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddComponent>) { 

  }

  ngOnInit() {
  }

  addToDo(entity: ToDo) {
    this.dialogRef.close(entity);
  }

  onCancel(){
    this.dialogRef.close(null);
  }

}
