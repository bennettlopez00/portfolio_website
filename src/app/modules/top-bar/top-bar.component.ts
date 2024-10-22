import { Component, Input } from '@angular/core';
import { interval} from 'rxjs';


@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input() topBarCurrenTitle:string = "Bennett Lopez&nbsp;&nbsp;"
  @Input() topBarCurrenSubtitle:string = "&nbsp;/&nbsp; SOFTWARE &nbsp; ENGINEER"
  @Input() boxColor:string = "green"
  @Input() smallScreen:boolean = false
  displayTitle:string = ""
  displaySubtitle:string = ""
  cursor:string = " "


  constructor() {
    
  }

  async ngOnInit() {
    await this.delay(500);
    this.cursor = "&nbsp;&nbsp;|"
    var index:number = 0
    var invalidStaringCharaters = new Map<string, string>([
      ["<", ">"],
      ["&",";"]
    ])
    while (index < this.topBarCurrenTitle.length) {
      await this.delay(70);
      var validString = ""
      var invalidStartingChrater:any = invalidStaringCharaters.get(this.topBarCurrenTitle[index])
      if (invalidStartingChrater != null) {
        while (index < this.topBarCurrenTitle.length && this.topBarCurrenTitle[index] != invalidStartingChrater) {
          validString = validString + this.topBarCurrenTitle[index];
          index++
        }
        this.displayTitle = this.displayTitle + validString + this.topBarCurrenTitle[index];
        index++;
      }
      else {
        this.displayTitle = this.displayTitle + validString + this.topBarCurrenTitle[index];
        index++;
      }
    }
    var index:number = 0
    while (index < this.topBarCurrenSubtitle.length) {
      await this.delay(70);
      var validString = ""
      var invalidStartingChrater:any = invalidStaringCharaters.get(this.topBarCurrenSubtitle[index])
      console.log(invalidStartingChrater)
      if (invalidStartingChrater != null) {
        while (index < this.topBarCurrenSubtitle.length && this.topBarCurrenSubtitle[index] != invalidStartingChrater) {
          validString = validString + this.topBarCurrenSubtitle[index];
          index++
        }
        this.displaySubtitle = this.displaySubtitle + validString + this.topBarCurrenSubtitle[index];
        index++;
      }
      else {
        this.displaySubtitle = this.displaySubtitle + validString + this.topBarCurrenSubtitle[index];
        index++;
      }
    }
    interval(600).subscribe(() => this.blinkTextFunction());
  }




  blinkTextFunction() {
    if (this.cursor == "") {
      this.cursor = "&nbsp;&nbsp;|"
    }
    else {
      this.cursor = ""
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
