import { Component } from '@angular/core';
import { Noty } from './noty/notyProvider';

@Component({
  selector: 'app-root',
  template: `
							<h1>{{title}}</h1>
<div>
<app-noty></app-noty>
<button (click)="showNoty()" type="button">Show Noty</button>
							
</div>
						`,
  styleUrls: ['app.component.scss']
})

export class AppComponent {
	title: string;
	selected: {
		name: string
	};

	constructor(public noty: Noty) {
		this.title = 'Title';
		this.selected = {
			name: ''
		}
	}

	onItemSelected($event: any) {
		const hero:string = $event.value;
		this.selected = { name: hero };
	}

	showNoty() {
		this.noty.show({
			message: 'Error',
			duration: 2000,
			autoClose: false,
			style: "error"
		});
	}
}
