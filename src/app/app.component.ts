import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-angular';

  projects = [
    {
      image: 'hackernews.png',
      title: 'Hackernews clone',
      github: 'https://github.com/LTimur/pet-react-ts-hackernews',
      demo: 'https://hackernewsclonereact.netlify.app/'
    },
    {
      image: 'todolist.png',
      title: 'Todolist',
      github: 'https://github.com/LTimur/pet-react-todolist',
      demo: 'https://pet-react-todolist.netlify.app/'
    },
    {
      image: 'landingEmentor.png',
      title: 'Landing for educational platform',
      github: 'https://github.com/LTimur/pet-landing-ementor',
      demo: 'https://ltimur.github.io/pet-landing-ementor/'
    }
  ]
}
