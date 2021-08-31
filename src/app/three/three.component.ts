import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  selects: any = ['a','b','c'];
  Cases: any = ['a','b','c'];
  names: any = ['a','b','c'];
    

 

  constructor( private router:Router,private route:ActivatedRoute,public dialogRef:MatDialogRef<ThreeComponent>) { }

  ngOnInit(): void {
  }
  RemoveAgreement(){
    this.router.navigate(['/one'],{relativeTo:this.route});

}




}
