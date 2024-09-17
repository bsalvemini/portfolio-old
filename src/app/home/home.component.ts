import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Welcome to my Personal Portfolio website</h1>
    <p>
      Hi, I'm Brandon Salvemini. I am a mostly self taught coder who has been
      coding for 14 years. This website is intended to show off my skills and
      what I have done with them. This website has my
      <a routerLink="/resume">resume</a>, an <a href="#">about me</a> page, and
      a <a href="#">projects</a> page showcasing the projects I have created.
    </p>
    <h2>My Bucket List</h2>
    <ul>
      @for (item of bucketListItems; track item) {
      <li>{{ item }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class HomeComponent {
  bucketListItems: string[];

  constructor() {
    this.bucketListItems = [
      'Start my own tech company',
      'Have an app in the App Store and/or Google Play',
      'Work for a major tech company',
      'Have one of my creations go viral',
      'Take a trip to Italy',
    ];
  }
}
