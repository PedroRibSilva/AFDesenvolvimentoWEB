import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-telainicial',
  templateUrl: './telainicial.component.html',
  styleUrls: ['./telainicial.component.css']
})
export class TelainicialComponent implements OnInit {
  waterConsumed: string = "1550";
  isEditingWater: boolean = false;
  inputValue: string = this.waterConsumed;
  temperature: number | null = null;

  currentDate: Date = new Date();
  day: number = this.currentDate.getDate();
  month: number = this.currentDate.getMonth() + 1;
  year: number = this.currentDate.getFullYear();

  API_KEY: string = 'cb31d3b272652eb231a7ef08b929a9d0';
  API_URL: string = `http://api.openweathermap.org/data/2.5/weather?q=Sorocaba&appid=${this.API_KEY}&units=metric`;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTemperature();
  }

  fetchTemperature(): void {
    this.http.get<any>(this.API_URL).subscribe(
      data => this.temperature = data.main.temp,
      error => console.error('Erro ao obter a temperatura:', error)
    );
  }

  handleWaterEdit(): void {
    this.isEditingWater = true;
  }

  handleWaterChange(newValue: string): void {
    this.inputValue = newValue;
  }

  handleWaterSubmit(): void {
    this.waterConsumed = this.inputValue;
    this.isEditingWater = false;
  }
}
