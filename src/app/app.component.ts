import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data = {
    name: 'Test-Firebase-SSR',
    bio: 'This web test the Firebase Hosting SSR',
    image: 'avatar.png'
  };

  title = 'Test-Firebase-SSR';
  constructor(private Title: Title, private meta: Meta) { }

  ngOnInit() {
    this.Title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/about' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image }
    ]);
  }
}
