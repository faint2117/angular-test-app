import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'adv-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {

  toDoForm: FormGroup;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Input() toDoEntity;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    if(this.toDoEntity) {
      this.toDoForm = this.formBuilder.group({
        taskDescription: [this.toDoEntity.taskDescription, Validators.required],
        isCompleted: [this.toDoEntity.taskDescription, Validators.required],
      });
    } else {
      this.toDoForm = this.formBuilder.group({
        taskDescription: ['', Validators.required],
        isCompleted: [false, Validators.required],
      });
    }
  }

  submitForm() {
    if(!this.toDoEntity) {
      this.toDoEntity = {};
    }

    Object.assign(this.toDoEntity, this.toDoForm.value);

    this.onSubmit.emit(this.toDoEntity);
  }

  cancel() {
    this.onCancel.emit(true);
  }

}
