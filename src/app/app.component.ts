import { Component } from '@angular/core';
import { Noty } from './noty/notyProvider';

@Component({
  selector: 'app-root',
  template: `
							<noty-example></noty-example>
<div>
<app-noty></app-noty>
							
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
}
