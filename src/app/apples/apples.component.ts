import { Component, OnInit } from '@angular/core';
import { ApplesService } from './apples.service';

@Component({
  selector: 'app-apples',
  templateUrl: './apples.component.html',
  styleUrls: ['./apples.component.css']
})
export class ApplesComponent implements OnInit {

  constructor(public applesService: ApplesService) { }

  ngOnInit() {
  }

}
