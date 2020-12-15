import { Car } from '../car/car.model'

export class CarsService {
  private cars: Car[] = [
    new Car(1, 'BMW', 'X6', 2900000),
    new Car(2, 'Audi', '6', 1900000),
    new Car(3, 'Mercedes-Benz', 'E', 3200000),
  ]

  getCarByID(id) {
    return this.cars.find((car) => car.id === id);
  }

  getAllCars() {
    return this.cars;
  }
}
