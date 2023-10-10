import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import Post from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataFake: Post[] = []

  constructor() { }

  ngOnInit(): void {
    this.dataFake = dataFake;
  }

}
