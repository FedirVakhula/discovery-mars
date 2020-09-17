import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Photos } from '../interfaces/rover';

@Injectable({
  providedIn: 'root'
})
export class CommunicationWithNASAService {

  constructor(private http: HttpClient) { }

  public getPhoto(rover: string, sol: string, cameras: string[]): Observable<{ photos: Photos[] }[]> {
    return forkJoin(
      cameras.map((camera) => this.http.get<{ photos: Photos[] }>(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${sol}&camera=${camera}&api_key=DEMO_KEY`))
    );
  }
}
