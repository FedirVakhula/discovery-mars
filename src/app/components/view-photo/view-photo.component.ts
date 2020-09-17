import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.scss']
})
export class ViewPhotoComponent implements OnInit {
  public photoList = [];
  pageIndex: number = 0;
  pageSize: number = 10;
  lowValue: number = 0;
  highValue: number = 100;
  pageEvent: PageEvent;

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.photoList = this.helperService.photoList;
  }

  getPaginatorData(event): void {
    console.log(event);
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    }
    else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }
}
