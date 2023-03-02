import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

constructor(){};
  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'var(--color-1)'
    })
    
    writer
      .type('Soy un programador junior con experiencia en lenguajes como JavaScript, Java y Python, así como en tecnologías como Angular, Vue, NodeJs, Bootstrap y WordPress. Tengo estudios acreditados por la Universidad San Tomas y la Universidad Nacional de Colombia, y estoy comprometido en continuar desarrollando mis habilidades y conocimientos en este campo en constante evolución.')
      .rest(5000)
      .start()

  }

}
