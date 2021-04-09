import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Globals } from 'src/app/globals';
import { AuthenticationService } from 'src/app/auth/services/authentication.service'
import { User } from 'src/app/data/entities/user';
import { UserApiService } from 'src/app/data/api/user-api.service';

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.scss']
})
export class AuthorisationComponent implements OnInit {
  loading: boolean = false;
  version: string = this.globals.VERSION;

  users: User[] = [];

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: [{value: '', disabled: true}, Validators.required]
});


  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private globals: Globals,
    private userApi: UserApiService
    ) { }

  ngOnInit() {
    this.userApi.getAllUsers().subscribe(users => {
      this.users = users.slice(0, 3)
      console.log(this.users)
    });
  }

  logIn(form: NgForm) {
    this.loading = true;

    this.authenticationService.logIn(form.value.username, '').subscribe(
      () => this.router.navigateByUrl('schedule'),
      error => this.loading = false
    );
  }
}
