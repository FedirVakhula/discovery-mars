import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { noPause: true, showIndicators: true } }
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public roversList = [{
    image: 'https://fainaidea.com/wp-content/uploads/2019/01/mer_2003_opportunity.gif',
    name: 'Opportunity',
    camera: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES']
  }, {
    image: 'https://delo.ua/files/news/images/3429/57/picture2_rover-curiosity-v_342957_p0.jpg',
    name: 'Curiosity',
    camera: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM']
  }, {
    image: 'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA14156-640x350.jpg',
    name: 'Spirit',
    camera: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES']
  }];

  constructor(private helper: HelperService) { }

  public ngOnInit(): void { }

  public onActiveSlideChange(index: number): void {
    this.helper.selectedRover$.next(this.roversList[index]);
  }
}
