import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Note: No need to import other modules in standalone components for this logic

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
    // Simple, direct validation
    if (this.username === 'isha' && this.password === 'isha123') {
      this.router.navigate(['/dashboard'], { state: { user: this.username } });
    } else {
      this.error = 'Invalid credentials';
    }
  }
}