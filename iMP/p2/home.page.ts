import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
 selector: 'app-home',
 standalone: true,
 imports: [IonicModule, FormsModule, CommonModule],
 templateUrl: './home.page.html',
 styleUrls: ['./home.page.scss'],
})
export class HomePage {
 username = '';
 password = '';
 loginMessage = '';
 counter = 0;
 constructor(private router: Router) {}
 login() {
if (this.username === 'ishita' && this.password === 'ishita123') {
 this.loginMessage = 'Login Successful';
 // Navigate to Student page and send demo data
 this.router.navigate(['/student'], {
 state: {
 name: 'Ishita',
 email: 'ishita@example.com',
 dob: '2005-06-30',
city: 'Mumbai',
 gender: 'Female',
 hobbies: { reading: true, sports: false, music: true }
 }
 });
 } else {
 this.loginMessage = 'Invalid username/password';
 }
 }
 increaseCounter() {
 this.counter++;
 }
}