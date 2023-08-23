import {ChangeDetectionStrategy, Component} from '@angular/core';
import { Input, Output, EventEmitter} from '@angular/core';
import { AuthService, User } from '@app/auth/shared/services/auth.service';
@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent {

  @Input()
  user: User;

  @Output()
  logout = new EventEmitter<any>();

  currentUser: String;
  constructor(
    private authService: AuthService
  ) {
    this.currentUser = this.authService.user.email.split("@")[0];
    console.log(this.currentUser);
  }

  logoutUser() {
    this.logout.emit();
  }

}
