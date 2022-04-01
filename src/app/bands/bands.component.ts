import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {

  bandHistory = [
    
    { bName: "Storm", bTown: "Dillsboro", bState: "IN", bFyear: "1979", bLyear: "1980",},
    { bName: "Speed Trap", bTown: "Dillsboro", bState: "IN", bFyear: "1980", bLyear: "1983",},
    { bName: "Destiny", bTown: "Aurora", bState: "IN", bFyear: "1983", bLyear: "1983",},
    { bName: "Anthem", bTown: "Amberg, Germany", bState: "", bFyear: "1985", bLyear: "1986",},
    { bName: "After Image", bTown: "Amberg, Germany", bState: "", bFyear: "1987", bLyear: "1989",},
    { bName: "Maker Hollow", bTown: "Aurora", bState: "IN", bFyear: "1994", bLyear: "1996",},
    { bName: "The Hollow", bTown: "Aurora", bState: "IN", bFyear: "1997", bLyear: "2005",},
    { bName: "Hoosier Daddy", bTown: "Milan", bState: "IN", bFyear: "2000", bLyear: "2001",},
    { bName: "Payper Jam", bTown: "Cincinnati", bState: "OH", bFyear: "2006", bLyear: "2008",},
    { bName: "Mr. Woody", bTown: "Cincinnati", bState: "OH", bFyear: "2007", bLyear: "2009",},
    { bName: "6 Again", bTown: "Lawrenceburg", bState: "IN", bFyear: "2010", bLyear: "2013",},
    { bName: "Raymar Jones", bTown: "Cincinnati", bState: "OH", bFyear: "2014", bLyear: "2015",},
    { bName: "Ridge Runner", bTown: "Lawrenceburg", bState: "IN", bFyear: "2015", bLyear: "2016",},
    { bName: "Joey Said No", bTown: "Cincinnati", bState: "OH", bFyear: "2017", bLyear: "2022",},
    { bName: "Adkins Drive", bTown: "Cincinnati", bState: "OH", bFyear: "2019", bLyear: "2020",},
    { bName: "Dirty Water Revival", bTown: "Lawrenceburg", bState: "IN", bFyear: "2019", bLyear: "2022",}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
