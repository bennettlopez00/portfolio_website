import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.large.css', './profile-modal.component.small.css']
})
export class ProfileModalComponent {
  @Input() profileName:string = "Bennett<br>Lopez"
  @Input() profileDescription:string = "SOFTWARE ENGINEER"
  // Should make a new type, TODO
  @Input() profileLinks:string[] = ["Portfolio", "Linkedin"]
  @Input() smallerScreen = false;

  // TODO: Make a type: <Name> : ["imagePath", "linkLocation"]
  profileLinkMap:Map<string, [string, string]> = new Map([
    ["Portfolio",["../../../assets/web-browser.png", "https://portfolium.com/BennettLopez"]],
    ["Linkedin",["../../../assets/linkedin.png", "https://linkedin.com/in/bennett-lopez01"]]
  ])

  profileLinkClicked(link:string) {
    window.open(link, "_blank");
  }
}
