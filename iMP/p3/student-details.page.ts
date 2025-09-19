import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.page.html',
})
export class StudentDetailsPage {
  student: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.student = nav?.extras?.state?.['studentData'];
  }
}
