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
    
    this.router.navigate(['/student-details'], { state: { studentData: this.student } });
  }
}