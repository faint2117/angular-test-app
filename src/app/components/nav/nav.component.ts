import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'adv-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private authService: AuthService) {}

  onUserChange(selection){
    console.log(selection);
    switch (selection.value) {
      case "Admin":    this.authService.setAdmin();
        break;
      case "Regular":  this.authService.setUser();
      default:
        break;
    }
  }

}
