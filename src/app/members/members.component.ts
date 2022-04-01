import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  bandNames = [
    
    { bName1: "Storm"},
    { bName2: "Speed Trap"},
    { bName3: "Destiny"},
    { bName4: "Anthem"},
    { bName5: "After Image"},
    { bName6: "Maker Hollow"},
    { bName7: "The Hollow"},
    { bName8: "Hoosier Daddy"},
    { bName9: "Payper Jam"},
    { bName10: "Mr. Woody"},
    { bName11: "6 Again"},
    { bName12: "Raymar Jones"},
    { bName13: "Ridge Runner"},
    { bName14: "Joey Said No"},
    { bName15: "Adkins Drive"},
    { bName16: "Dirty Water Revival"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
