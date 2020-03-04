import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDo } from 'src/app/models/to-do/to-do';

@Component({
  selector: 'adv-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  entity: ToDo;

  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDo) { 
    
  }

  ngOnInit() {
    this.entity = this.data;
  }

  updateToDo(entity: ToDo) {
    this.dialogRef.close(entity);
  }

  onCancel(){
    this.dialogRef.close(null);
  }

}
