import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exerc',
  templateUrl: './exerc.component.html',
  styleUrls: ['./exerc.component.css']
})
export class ExercComponent {

  
  constructor(private router: Router) { }

  openYouTubeVideo(url: string): void {
    window.open(url, '_blank');
  }
}
