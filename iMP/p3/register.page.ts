import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
})
export class RegisterPage {
  student = { name: '', email: '' };

  constructor(private router: Router) {}

  submit() {
    // Navigate and pass the whole student object
    this.router.navigate(['/student-details'], { state: { studentData: this.student } });
  }
}