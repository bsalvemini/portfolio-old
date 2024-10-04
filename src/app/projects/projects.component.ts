import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <h1>Projects</h1>
    <p>
      This page shows the projects I've worked on during the
      <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/"
        >Web Development cohort</a
      >
      at <a href="https://www.bellevue.edu/">Bellevue University</a>. My
      <a href="https://github.com/bsalvemini">GitHub</a> has other smaller
      projects I did during the cohort in the various repos.
    </p>

    @for (project of projects; track project) {
    <h2>{{ project.projectName }}</h2>
    <div class="project">
      <figure>
        <a href="{{ project.projectURL }}"
          ><img
            src="{{ project.projectScreenshot.screenshotURL }}"
            alt="{{ project.projectScreenshot.imageAltText }}"
        /></a>
        <figcaption>{{ project.projectScreenshot.imageCaption }}</figcaption>
      </figure>
      <div class="project-desc">
        <p>{{ project.projectDesc }}</p>
        <a href="{{ project.projectURL }}">Link</a>
        <a href="{{ project.projectRepo }}">GitHub Repo</a>
      </div>
    </div>
    <hr />

    }
  `,
  styles: `
    .project {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  }

    .project-desc > p, .project-desc > a {
      padding: 10px;
    }
  `,
})
export class ProjectsComponent {
  projects: any[];

  constructor() {
    this.projects = [
      {
        projectID: 1,
        projectName: 'Biosite',
        projectDesc: `This is a bio site about my younger sister. Basic HTML and CSS were
              used in this project. I learned about HTML and CSS from this project,
              specifically about CSS Flex. I also learned about web accessibility
              while doing this project, as I was required to do an accessibility
              audit on the site.`,
        projectURL: 'https://bsalvemini.github.io/bioSite/',
        projectRepo: 'https://github.com/bsalvemini/bioSite',
        projectScreenshot: {
          screenshotURL: '/assets/Biosite.jpg',
          imageAltText: 'placeholder',
          imageCaption: 'The home page of the Biosite',
        },
      },
      {
        projectID: 2,
        projectName: 'in-n-out-books',
        projectDesc: `This project is a basic API for a keeping track of a book collection. Many
              technologies were used in this project. They include Node.js,
              Express.js, bcryptjs, as well as some HTML and CSS. I learned a lot
              with this project. I learned about implementing CRUD operations,
              password hashing and authentication, and password reset using security
              questions. I also learned how to deploy a Node.js project on
              Render (render.com). Note that the mock database
              code was not written by me.`,
        projectURL: 'https://salvemini-in-n-out-books.onrender.com',
        projectRepo: 'https://github.com/bsalvemini/in-n-out-books',
        projectScreenshot: {
          screenshotURL: '/assets/in-n-out-books.jpg',
          imageAltText: 'placeholder',
          imageCaption: 'The landing page for in-n-out-books',
        },
      },
      {
        projectID: 3,
        projectName: 'RPG Character Builder',
        projectDesc: `This project is an application for creating characters
         for RPG games. Angular 18 and Node.js were used in this project.
         I learned a lot from this project. This includes the basics of Angular
         templates, Angular routing, three different types of Angular forms,
         about input and output between components, HttpClient and Angular modules.`,
        projectURL: '#',
        projectRepo: '#',
        projectScreenshot: {
          screenshotURL: '/assets/rpg-character-builder.jpg',
          imageAltText: 'placeholder',
          imageCaption: 'The landing page for RPG Character Builder',
        },
      },
      {
        projectID: 4,
        projectName: 'Personal Portfolio',
        projectDesc: `This is my personal portfolio website that you are currently viewing.
          Angular 18 was used in this project. This site allowed me to practice some of what
          I learned in the RPG Character Builder project.`,
        projectURL: '/',
        projectRepo: 'https://github.com/bsalvemini/portfolio',
        projectScreenshot: {
          screenshotURL: '/assets/personal-portfolio.jpg',
          imageAltText: 'placeholder',
          imageCaption: 'The About page of the Personal Portfolio website',
        },
      },
    ];
  }
}
