import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/ToDo/to-do.service';
import { ToDo } from '../../models/to-do/to-do';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AddComponent } from '../add/add.component';
import { UpdateComponent } from '../update/update.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'adv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toDos:ToDo[];
  loaded: boolean;

  constructor(private toDoService: ToDoService, 
    public dialog: MatDialog, 
    private authService: AuthService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.toDoService.getToDos('5e5ee2183100005000afd8a6').subscribe(resp => {
      this.toDos = resp
      this.loaded = !this.loaded;
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result: ToDo) => {
      result.id = this.toDos.length + 1;
      this.toDos.push(result);
      if(result){
        this.openSnackBar('ToDo Created', "Create");
      }
    });
  }

  openEditDialog(toDo: ToDo): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '350px',
      data: toDo
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.openSnackBar('ToDo Updated', "Update");
      }
    });
  }

  delete(index) {
    this.toDos.splice(index, 1);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
