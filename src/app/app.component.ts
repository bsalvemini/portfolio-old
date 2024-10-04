import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <h2>Brandon Salvemini</h2>
        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/resume">Resume</a></li>
            <li><a routerLink="/about">About</a></li>
            <li><a routerLink="/projects">Projects</a></li>
          </ul>
        </nav>
      </header>
      <main class="main-content">
        <section class="content">
          <router-outlet />
        </section>
      </main>
      <footer class="footer">&copy; 2024 Brandon Salvemini</footer>
    </div>
  `,
  styles: [``],
})
export class AppComponent {}
