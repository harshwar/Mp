import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {
  user: string;

  constructor(private router: Router) {
    
    const nav = this.router.getCurrentNavigation();
    this.user = nav?.extras?.state?.['user'] || 'Guest';
  }
}