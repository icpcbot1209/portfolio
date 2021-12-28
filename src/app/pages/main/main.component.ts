import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  title = 'portfolio';

  authorized = false;
  now = Date.now();

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((paramMap: ParamMap)=> {
      const num = paramMap.get('num');
      if(!num) {
        this.authorized = false;
      } else {
        const duration = this.now - Number(num);
        if(0<duration && duration < 24*3600*1000) this.authorized = true;
        else this.authorized = false;
      }

    })
  }

  ngOnInit(): void {}

  scrollToElement(element: any) {
    const el = element as HTMLElement;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
