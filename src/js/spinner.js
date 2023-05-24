export class Spiner {
	spinnerEl = document.createElement('div');
	circleFirst = document.createElement('div');
	circleSecond = document.createElement('div');
 
	constructor() {
	  this.spinnerEl.classList.add('spinner');
	  this.circleFirst.classList.add('circle', 'circle-1', 'is-hidden');
	  this.circleSecond.classList.add('circle', 'circle-2', 'is-hidden');
	  this.spinnerEl.appendChild(this.circleFirst);
	  this.spinnerEl.appendChild(this.circleSecond);
	  document.body.appendChild(this.spinnerEl);
	}
 
	show() {
	  this.spinnerEl.classList.remove('is-hidden');
	  this.circleFirst.classList.remove('is-hidden');
	  this.circleSecond.classList.remove('is-hidden');
	}
 
	hide() {
	  this.spinnerEl.classList.add('is-hidden');
	  this.circleFirst.classList.add('is-hidden');
	  this.circleSecond.classList.add('is-hidden');
	}
 
	getEl() {
	  return this.spinnerEl;
	}
 }