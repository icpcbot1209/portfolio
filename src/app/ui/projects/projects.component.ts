import { Component, Input, OnInit } from '@angular/core';

import { IProject, projects } from 'src/app/model/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  @Input() authorized: boolean | undefined;
  @Input() now: Number | undefined;
  
  projects: IProject[] = projects.slice(0, 4);
  constructor() {}

  ngOnInit(): void {}

}
