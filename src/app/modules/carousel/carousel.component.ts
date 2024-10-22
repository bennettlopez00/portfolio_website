import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


export interface carouselItem { 
  imagePath:string 
  itemText:string
  itemTitle:string
  itemLink:string
} 


@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {


  @Input() currentCarouselIndex:number = 0
  // Generic Boolean, true for left, false for right
  @Input() buttonPushEvent:Subject<boolean> | null = null;
  @Input() carouselItems:carouselItem[] = []
  currentImagePath:string = ""
  currentItemLink:string = ""
  @Output() currentDescription: EventEmitter<string> = new EventEmitter<string>()
  @Output() currentTitle: EventEmitter<string> = new EventEmitter<string>()


  ngOnInit() {
    if (this.buttonPushEvent != null) {
      this.buttonPushEvent.subscribe((event) => this.rotateCarousel(event))
    }
    this.rotateCarousel(false)
  }

  rotateCarousel(buttonPushEvent:any) {
    // True: Left button pressed
    if (buttonPushEvent) {
      // If the index is zero, go back around to the top of the list
      if (this.currentCarouselIndex == 0) {
        this.currentCarouselIndex = this.carouselItems.length - 1
      }
      // If the number is less than zero, then safe to increment
      else {
        this.currentCarouselIndex = this.currentCarouselIndex - 1
      }
    }
    // False: Right button pressed
    else {
      // If the index is on the top the the list, go back around to the start
      if (this.currentCarouselIndex == this.carouselItems.length - 1) {
        this.currentCarouselIndex = 0
      }
      // If the number is less than zero, then safe to increment
      else {
        this.currentCarouselIndex = this.currentCarouselIndex + 1
      }
    }
    // Update the current image in this class
    this.currentImagePath = this.carouselItems[this.currentCarouselIndex].imagePath
    this.currentItemLink = this.carouselItems[this.currentCarouselIndex].itemLink
    // Send the new descripton to the parent class
    this.currentDescription.emit(this.carouselItems[this.currentCarouselIndex].itemText)
    this.currentTitle.emit(this.carouselItems[this.currentCarouselIndex].itemTitle)
  }

  portfolioItemClicked(event: any) {
    window.open(this.currentItemLink, "_blank");
  }

}
