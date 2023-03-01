import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input() topBarCurrentName:string = "<b>Bennett Lopez</b> &nbsp;&nbsp;" +
                             "/ &nbsp;&nbsp; <i>S O F T W A R E &nbsp;&nbsp; E N G I N E E R</i>"
  @Input() boxColor:string = "green"
  @Input() smallScreen:boolean = false
  // @Output() newItemEvent = new EventEmitter<string>();
  // this.newItemEvent.emit(value);

}
