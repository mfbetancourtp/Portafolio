import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
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
