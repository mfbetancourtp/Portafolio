import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements  OnInit, AfterViewInit  {
  @ViewChild('asTitle')
  asTitle!: ElementRef;
  
  ngOnInit(): void {
  
  }
  AfterViewInit():void {
    this.initEffect();
  }

  initEffect = () => {
    const target= this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'blue'
    })
    
    writer
      .type('A simple syntax makes it easy.')
      .rest(500)
      .start()
              
  }   

}

 


