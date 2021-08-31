import { Component, OnInit } from '@angular/core';
import { OneComponent } from '../one/one.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  
 files=["pt","ni","bi"];
 cars=["mercedes","alto","benz"];
 types=["html","doc","pdf"]
  

  constructor() { }

  ngOnInit(): void {
  }

}
