import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})
export class HomePage {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    
    if (this.username === 'harsh' && this.password === 'harsh123') {
      this.router.navigate(['/dashboard'], { state: { user: this.username } });
    } else {
      this.error = 'Invalid credentials';
    }
  }
}