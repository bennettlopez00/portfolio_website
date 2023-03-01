import { Component, Input } from '@angular/core';

@Component({
  selector: 'timeline-modal',
  templateUrl: './timeline-modal.component.html',
  styleUrls: ['./timeline-modal.component.css']
})
export class TimelineModalComponent {
  @Input() title:string = "DEFAULT TITLE"
  @Input() subtitle:string = "DEFAULT SUBTITLE"
  @Input() description:string = "DEFAULT DESCRIPTION adssda asd asda sda dsad asd asd asd asd as dasd asd asd asd"



ngOnChanges() {
  var modifiedTitle:string = ""
  var ignoreTag:boolean = false;
  for (var i = 0; i < this.title.length; i++) {

    if (this.title[i] == "<") {
      ignoreTag = true;
    }

    if (this.title[i] != " " && !ignoreTag) {
      modifiedTitle = modifiedTitle + this.title[i] + "&nbsp;"
    }
    else if (!ignoreTag) {
      modifiedTitle = modifiedTitle + this.title[i] + "&nbsp;&nbsp;&nbsp;"
    }

    if (ignoreTag && this.title[i] == ">") {
      ignoreTag = false;
    }


  }
  
  this.title = modifiedTitle;
}

constructor() {
  this.ngOnChanges();
}


}
