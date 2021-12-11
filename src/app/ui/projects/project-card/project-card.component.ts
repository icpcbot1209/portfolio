import { IProject } from './../../../model/projects';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project?: IProject;

  constructor() {}

  ngOnInit(): void {}

  backgroundUrlOf(path?: string) {
    return `url("${path}")`;
  }

  thumbnailOf(path?: string): string {
    const id = path?.split('/')[5];
    const thumbnail = `https://drive.google.com/uc?id=${id}`;
    console.log(thumbnail);
    return thumbnail;
  }

  gotoLink(link?: string): void {
    window.open(link, '_blank');
  }
}
