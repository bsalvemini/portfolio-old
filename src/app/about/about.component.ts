import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="wrapper">
      <h1>About</h1>
      <div class="about-content">
        <img
          src="/assets/20231018_114500.jpg"
          alt="A picture of Brandon Salvemini"
        />
        <p>
          Hi, I'm Brandon Salvemini. I have been into computers from a very
          early age. I have been coding since I was about 15 years old. I have
          been coding for 14 years. Coding is my passion. I am largely
          self-taught, but I have also taken many programming college courses as
          well (see the resume page for detailed information on my education). I
          had always been curious about programming, but I didn't know where to
          start. My first experience with web development was creating websites
          on the now defunct Webs, formally known as FreeWebs. It used a WYSIWYG
          editor, so it didn't give me experience with HTML. My first experience
          with HTML was when I got an old book on HTML at a garage sale. I spent
          lots of time making web pages using what I learned in that book. That
          book is what really got me into coding. My first experience with
          non-web development was when I created a web browser on my Mac using a
          YouTube tutorial. This started in interest in developing for Apple
          Platforms. I later started creating Windows applications using Visual
          Basic Express 2010, and this started my love for the .NET Framework
          and WinForms. I later moved onto C#. In addition to coding, I also
          have a passion for gaming, both modern and retro. I game on both PC
          and console. I'm also into vintage/retro computing and I collect
          vintage computer hardware and software.
        </p>
      </div>
    </div>
  `,
  styles: `
  .about-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  p {
    padding: 10px;
  }
  `,
})
export class AboutComponent {}
