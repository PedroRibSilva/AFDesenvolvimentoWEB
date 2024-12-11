import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  
  currentDate: Date = new Date();
  day: number = this.currentDate.getDate();
  month: number = this.currentDate.getMonth() + 1;
  year: number = this.currentDate.getFullYear();

  constructor(private router: Router) { }

  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }
}
