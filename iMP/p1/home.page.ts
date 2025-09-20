import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
 selector: 'app-home',
 standalone: true,
 imports: [
 IonicModule, 
 FormsModule, 
 CommonModule 
 ],
templateUrl: './home.page.html',
 styleUrls: ['./home.page.scss']
})
export class HomePage {
 name: string = '';
 email: string = '';
 submitted = false;
 counter = 0;
 submit() {
 if (this.name && this.email) {
 this.submitted = true;
 } else {
 alert('Please enter both name and email.');
 }
 }
 increment() {
 this.counter++;
 }
 decrement() {
 if (this.counter > 0) {
 this.counter--;
 }
 }
}