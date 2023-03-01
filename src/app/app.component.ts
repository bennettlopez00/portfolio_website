import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { CarouselComponent } from './modules/carousel/carousel.component';
import { carouselItem } from './modules/carousel/carousel.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.large.css', './app.component.small.css'],
  animations: [

  ]
})
export class AppComponent {
  title = 'PortfolioProject';
  smallScreen:boolean = false
  arrowButtonPressNotifier = new Subject<boolean>();
  carouselDescription:string = ""
  carouselTitle:string = ""
  
  carouselItems:carouselItem[] = [
    { itemLink:'https://portfolium.com/BennettLopez', imagePath:'../assets/carousel_images/blog.png', itemTitle:'Full Stack Blog', itemText:'This project was the development of a blog, utilizing the client server model. I created a REST API to server the application using best practices (SQL injection, Hashing, HTTPS). This, along with a font end to utilize the endpoints.' },
    { itemLink:'https://portfolium.com/BennettLopez', imagePath:'../assets/carousel_images/CUDA_PRD_PRAY.png', itemTitle:'CUDA Parallel Predator & Prey Implementation', itemText:'This project was a CUDA implementation of the Predator Prey simulation. I had a lot of fun during this project, and learned a lot about parallel programming with specialized hardware.' },
    { itemLink:'https://portfolium.com/BennettLopez', imagePath:'../assets/carousel_images/Miranda_Research_Paper.png', itemTitle:'Miranda Reaserch Paper', itemText:'The goal of this project was to explore a single language and analyze the historical and functional context. This, while learning and developing in the language. The language Miranda is a purely functional language with an emphasis on polymorphic typing and lazy evaluation.' },
    { itemLink:'', imagePath:'../assets/carousel_images/This_Website.png', itemTitle:'This Website!', itemText:'Click on the image' },
    { itemLink:'https://portfolium.com/BennettLopez', imagePath:'../assets/carousel_images/UML_Diagram.png', itemTitle:'UML Diagram for C++ Chess game', itemText:'This is a sample from my Object Oriented Course. There was a focus on diagraming Object Oriented Coding with ER diagrams. The final project in this course was a Chess Game implemented in C++.'  },
    { itemLink:'https://portfolium.com/BennettLopez', imagePath:'../assets/carousel_images/web-crawler.jpg', itemTitle:'Java Threaded Web Crawler', itemText:'This project was a threaded implementation of a web crawler that would find the URL links given a source, then recursively visit all the linked websites. This problem is under the category of "Embarrassingly parallel", because the atomic tasks do not have resource contention, or do not share a critical region in memory. '  },
    { itemLink:'https://mywebsitenow.github.io/CodeJam.html', imagePath:'../assets/carousel_images/Code_Jam.png', itemTitle:'Code Jam Inital Website', itemText:'This Code Jam is geared for George Fox University students to turn technology ideas into real-life, practical projects while working in a welcoming and supportive atmosphere. This is the place to showcase your creativity and innovation, as well as create something super cool outside of the classroom!'  },

  ]

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if (window.innerWidth < 1095 ) {
      this.smallScreen = false;
    }
    else {
      this.smallScreen = true;
    }
  }

  constructor() {
    this.onResize("")
    console.log(document.getElementsByTagName("link"))
  }

  onCarouselButtonClick(direction:boolean) {
    this.arrowButtonPressNotifier.next(direction)
  }

  updateDescription($event:any) {
    this.carouselDescription = ($event as string)
  }

  updateTitle($event:any) {
    this.carouselTitle = ($event as string)
  }




}
