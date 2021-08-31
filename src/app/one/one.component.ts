import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {ActivatedRoute, Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { ThreeComponent } from '../three/three.component';
import { TwoComponent } from '../two/two.component';
import { CaseService } from '../case.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  
  CaseNumber='';
  CaseName='';
  GroupName='';
  GroupNumber='';
  PolicyNumber='';
  LastName='';
  SSN='';
  Headers:any=["Include","Filename","DocumentType","Amount"]
  rows : any=[
    {
      "Include":"yes",
      "Filename":"pt",
      "DocumentType":"html",
      "Amount":"100"
    },
    {
      "Include":"yes",
      "Filename":"rt",
      "DocumentType":"doc",
      "Amount":"200"
    },
    {
      "Include":"yes",
      "Filename":"st",
      "DocumentType":"pdf",
      "Amount":"150"
    }
  ]
  

  numbers=[1,2,3,4,5];

  constructor( private router:Router,private route:ActivatedRoute,public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
  this.CaseNumber='';
  this.CaseName='';
  this.GroupName='';
  this.GroupNumber='';
  this.PolicyNumber='';
  this.LastName='';
  this.SSN='';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";

   let dialogRef= this.dialog.open(ThreeComponent,dialogConfig);

   dialogRef.afterClosed().subscribe(result =>{
     console.log(`Dialog result:${result}`);
   });
  
  }
  

}
