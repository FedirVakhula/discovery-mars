import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { Rover, Photos } from 'src/app/interfaces/rover';
import { ThemePalette } from '@angular/material/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { CommunicationWithNASAService } from '../../services/communication-with-nasa.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-rover-properties',
  templateUrl: './rover-properties.component.html',
  styleUrls: ['./rover-properties.component.scss']
})
export class RoverPropertiesComponent implements OnInit {
  public rover: Rover;
  public color: ThemePalette = 'primary';
  public formCameraGroup: FormGroup;
  public selectedDate: Date;
  private cameraList: Array<string>;
  private sol: string;

  constructor(
    private helperService: HelperService,
    private router: Router,
    private communicationWithNASAService: CommunicationWithNASAService,
  ) { }

  public ngOnInit(): void {
    this.formCameraGroup = new FormGroup({});
    this.formCameraGroup.validator = this.requireCheckboxesToBeCheckedValidator();
    this.helperService.selectedRover$.subscribe(
      (data) => {
        this.rover = data;
        data.camera.forEach((value: string) => {
          this.formCameraGroup.addControl(value, new FormControl(false));
        });
      }
    );
  }

  public setParams(): void {
    if (this.formCameraGroup.invalid) {
      return;
    }

    this.cameraList = Object.keys(this.formCameraGroup.value).reduce((prev, curr) => {
      if (this.formCameraGroup.value[curr]) {
        prev.push(curr);
      }

      return prev;
    }, []);
    this.communicationWithNASAService.getPhoto(this.rover.name, this.sol, this.cameraList)
      .pipe(
        catchError(() => {
          return throwError('err');
        })
      )
      .subscribe((photos: { photos: Photos[] }[]) => {
        this.helperService.photoList = ([].concat(photos)).reduce((prev, curr) => {
          prev.push(...curr.photos);
          return prev;
        }, []);
        this.router.navigateByUrl('photo');
      });
  }

  public onSelectDate(newDate: Date): void {
    this.sol = newDate.toISOString().slice(0, 10);
  }

  public filterDates(date: Date): boolean {
    const today = new Date();
    return date < today;
  }

  private requireCheckboxesToBeCheckedValidator(minRequired: number = 1): ValidatorFn {
    return function validate(formGroup: FormGroup): { requireCheckboxesToBeChecked: boolean } {
      let checked = 0;

      Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.controls[key];
        if (control.value) {
          checked++;
        }
      });

      if (checked < minRequired) {
        return { requireCheckboxesToBeChecked: true };
      }

      return null;
    };
  }

}
