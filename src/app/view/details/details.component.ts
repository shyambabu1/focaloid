import { Component, OnInit } from '@angular/core';
import { SidebarEventService } from './sub/sidebar/sidebar-event.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  showNav = false;
  constructor(private ses: SidebarEventService) { }

  ngOnInit(): void {
    this.subscribeSidebarEvent();
  }

  openNav(): void{
    this.showNav = true;
    console.log("Inide openNav");
    
  }

  closeNav(): void{
    this.showNav = false;
  }
  subscribeSidebarEvent(){
    this.ses.getSidebarEventObs().subscribe((msg:any)=>{
      console.log('Event received: ',msg);
      this.closeNav();
    });
  
  }

}
