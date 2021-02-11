import { Component, OnInit } from '@angular/core';
import { SidebarEventService } from './sidebar-event.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(private ses: SidebarEventService) {

   }

  ngOnInit(): void {
    console.log("Inside App sidebar ngOninit");
    
  }
  closeNav(): void{
    this.ses.triggerSidebarEventObs('side bar close event triggered')
  }
  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  // }
  
  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("main").style.marginLeft= "0";
  // }

}
