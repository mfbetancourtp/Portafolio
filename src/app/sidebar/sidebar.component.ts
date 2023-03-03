import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  
  links: Array<linksModel>=[
    {
      link:'https://github.com/mfbetancourtp',
      icon: '<i class="uil uil-github"></i>'
    },
    {
      link:'https://www.linkedin.com/in/manuel-fernando-betancourt-paez-515735194/',
      icon: '<i class="uil uil-linkedin"></i>'
    }, 
    {
      link:'mailto:manu.fb55@gmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    }
    
    
  ];
  ngAfterViewInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'var(--color-1)'
    })
    writer
      .type('Manuel Betancourt P')
      .rest(5000)
      .start()
  }

 constructor(){};
 ngOnInit(): void {}
  

}

class linksModel{
  link!: String;
  icon!: String;

};