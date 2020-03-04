import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  //isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAdmin: Observable<boolean> = this._isAdmin.asObservable();

  constructor() { 
  }

  setUser(){
    this._isAdmin.next(false);
  }

  setAdmin() {
    this._isAdmin.next(true);
  }
}
