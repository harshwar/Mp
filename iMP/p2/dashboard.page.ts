import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
 selector: 'app-student',
 standalone: true,
 imports: [IonicModule, CommonModule, FormsModule],
 templateUrl: './student.page.html',
 styleUrls: ['./student.page.scss'],
})
export class StudentPage {
 name = '';
 email = '';
 city = '';
 dob = '';
 gender = '';
 hobbies = { reading: false, sports: false, music: false };
 constructor(private router: Router) {
 const nav = this.router.getCurrentNavigation();
 const data = nav?.extras?.state;
 if (data) {
 this.name = data['name'];
 this.email = data['email'];
 this.city = data['city'];
 this.dob = data['dob'];
 this.gender = data['gender'];
 this.hobbies = data['hobbies'];
}
 }
 get hobbyList(): string {
 const list: string[] = [];
 if (this.hobbies.reading) list.push('reading');
 if (this.hobbies.sports) list.push('sports');
 if (this.hobbies.music) list.push('music');
 return list.length ? list.join(', ') : '—';
 }
}