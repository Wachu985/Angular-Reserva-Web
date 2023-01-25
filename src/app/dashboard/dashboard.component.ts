import { Component, OnInit } from '@angular/core';
import { Hotel } from '../Hotel';
import { HotelesService } from './hoteles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hoteles: Hotel[];

  constructor(private hotelesServices:HotelesService) {
    this.hoteles = this.hotelesServices.gethoteles();
  }

  ngOnInit() {
  }

}
