import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CarsService} from '../cars-list/cars.service';
import {Car} from './car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarsService]
})

export class CarComponent implements OnInit {
  public id: number;
  public car: Car;

  constructor(private activateRoute: ActivatedRoute, private dataCars: CarsService) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => {
        this.id = +data;
        this.car = this.dataCars.getCarByID(this.id);
      });
  }

}
