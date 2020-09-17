import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { Rover } from 'src/app/interfaces/rover';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private rover: Rover;
  public arrow = false;

  constructor(
    private router: Router,
    private helper: HelperService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  public navigateToSelectCamera(): void {
    this.rover = this.helper.selectedRover$.getValue();
    const link = ['mars/', this.rover.name.toLowerCase()];
    this.router.navigate(link);
    this.arrow = true;
  }

  public goBack(): void {
    this.router.navigateByUrl('mars');
    this.arrow = false;
  }
}
