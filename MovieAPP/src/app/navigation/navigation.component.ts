import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetUser, Photo, User } from '../_models/user';
import { UserManagementServiceService } from '../_services/user-management-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  model: any = {};
  user: GetUser;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  ngOnInit(): void {
    this.loadLoggedInUser();

  }

  constructor(private umService: UserManagementServiceService, private breakpointObserver: BreakpointObserver, public accountService: AccountService, private router: Router, private toastr: ToastrService) { }
  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/home');
      window.location.reload();
    }, error => {
      console.log(error);
      this.toastr.error("Neispravno korisnicko ime ili lozinka");
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
    window.setTimeout(function () { location.reload() }, 500)
  }
  loadLoggedInUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    const id = this.accountService.getId(user);
    if (user) {
      this.umService.getMember(id).subscribe(user1 => {
        this.user = user1;
        

      })
    }

  }
}
