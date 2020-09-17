import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Rover, Photos } from '../interfaces/rover';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public selectedRover$: BehaviorSubject<Rover> = new BehaviorSubject(null);
  public photoList: Photos[] = [];

  constructor() { }
}
