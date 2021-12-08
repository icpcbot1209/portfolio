import { Component, OnInit } from '@angular/core';

import {IProject, projects} from 'src/app/model/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = projects;
  constructor() {}

  ngOnInit(): void {}
}
