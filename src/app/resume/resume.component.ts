import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="wrapper">
      <h1>Resume</h1>
      <p>Brandon Salvemini</p>
      <a href="mailto:bcsalvemini@gmail.com">bcsalvemini&#64;gmail.com</a>
      <br />
      <section id="education">
        <h3>Education</h3>

        <p>Vestal High School - Vestal, NY</p>
        <p>Graduation: June 2014</p>
        <ul>
          <li>Regents Diploma</li>
        </ul>
        <br />
        <p>Broome-Tioga BOCES - Binghamton, NY</p>
        <p>Network Systems Analyst/Computer Support Specialist Certificate</p>
        <p>Graduation: June 2014</p>
        <ul>
          <li>Computer repair</li>
          <li>Network design, troubleshooting and repair</li>
        </ul>
        <br />
        <p>SUNY Broome - Binghamton, NY</p>
        <p>Graduation: May 2023</p>
        <ul>
          <li>Computer Technology-AAS</li>
          <li>Computer Information Systems-AAS</li>
          <li>Graduated with honors</li>
        </ul>
        <br />
        <p>Bellevue University - Bellevue, NE (attended remotely)</p>
        <p>Graduation: 2025</p>
        <ul>
          <li>Web Development-BS</li>
          <li>Deans List Winter 2023</li>
        </ul>
      </section>

      <section id="volunteer">
        <h3>Volunteer Experience</h3>
        <p>Volunteer, George F. Johnson Memorial Library - Endicott, NY</p>
        <p>October 2013</p>
        <ul>
          <li>Young Adult Inventory</li>
          <li>Shelf reading</li>
        </ul>
      </section>
      <br />
      <section id="skills">
        <h3>Skills & Abilities</h3>
        <ul>
          <li>
            Programming in a wide variety of programming languages, including
            C#, VB.NET, JavaScript, Python, and more
          </li>
          <li>Experience with Windows, macOS and Linux operating systems</li>
          <li>iOS and Android application development</li>
          <li>Hard worker</li>
          <li>Team player</li>
        </ul>
      </section>
      <br />
      <section id="additionalInfo">
        <h3>Additional Info</h3>
        <ul>
          <li>Broome-Tioga BOCES Honor Roll</li>
          <li>
            Broome-Tioga BOCES Certificate of Achievement Outstanding Student
          </li>
          <li>NOCTI Computer Repair Technician</li>
        </ul>
      </section>
      <br />
      <p><a href="/assets/Brandon Salvemini Resume.pdf">Download</a> this resume in PDF format</p>
    </div>
  `,
  styles: [
    `
      ul {
        padding-left: 30px;
      }
    `,
  ],
})
export class ResumeComponent {}
