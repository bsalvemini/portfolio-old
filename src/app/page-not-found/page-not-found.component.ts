import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container">
      <div class="not-found-text">404</div>
      <h2>Page not found</h2>
      <a routerLink="/">Return to Home page</a>
    </div>
  `,
  styles: `
  .not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .not-found-text {
    color: #ff7e00;
    font-size: 186px;
  }

  .not-found-container > h2 {
    color: inherit;
  }
  `,
})
export class PageNotFoundComponent {}
