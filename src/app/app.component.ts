import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
							<h1>{{title}}</h1>
							<div class="row">
								<app-list (select)="onItemSelected($event)"></app-list>
								<app-form [item]="selected"></app-form>
							</div>
						`,
  styleUrls: ['app.component.scss']
})

export class AppComponent {
	title: string;
	selected: {
		name: string
	};

	constructor() {
		this.title = 'Title';
		this.selected = {
			name: ''
		}
	}

	onItemSelected($event: any) {
		const hero:string = $event.value;
		this.selected = { name: hero };
	}
}
