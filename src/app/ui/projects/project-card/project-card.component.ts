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

  url(path: string) {
    return `url("${path}")`;
  }
}
