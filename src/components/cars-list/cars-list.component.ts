import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
import {Car} from '../car/car.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
  providers: [CarsService]
})
export class CarsListComponent implements OnInit {
  public cars: Car[] = []

  constructor(private dataCars: CarsService) { }

  ngOnInit(): void {
    this.cars = this.dataCars.getAllCars();
  }
}
