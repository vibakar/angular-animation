import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
	    state('in', style({transform: 'translateX(0)'})),
	    transition('void => *', [
	      animate(300, keyframes([
	        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
	        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
	        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
	      ]))
	    ]),
	    transition('* => void', [
	      animate(300, keyframes([
	        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
	        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
	        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
	      ]))
	    ])
	])
  ]
})
export class AppComponent {
  title = 'Angular Animation';
  letters: any[] = ['A', 'B', 'C', 'D'];
  next: number = 0;
  staggeringLetters: any[] = [];

  constructor(){
    this.add();
  }
  
  add() {
	var addInterval = setInterval(()=> {
	   if(this.next < this.letters.length) {
	    this.staggeringLetters.push(this.letters[this.next++]);
	   }

	   if(this.letters.length == this.staggeringLetters.length) {
	   	this.remove();
	   	clearTimeout(addInterval);
	   }
	  }, 1000)
  }

  remove() {
  	setInterval(()=> {
	  	if(this.staggeringLetters.length > 0) {
	  		let i = this.staggeringLetters.length - 1;
    		this.staggeringLetters.splice(i, 1);
	  	}
  	}, 1000);
  }
}
