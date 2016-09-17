import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Model } from './model';

@Component({
	selector: 'app-form',
	template: `
							<form>
								<label for="name">Name</label>
        				<input type="text" class="form-control" id="name" [(ngModel)]="model.name" name="name" required>
							</form>
						`
})

export class FormComponent {
	@Input()
	set item(item: any) {
		console.info('selected: ', item);
		this.model.name = item.name;
	}

	model: any;
	submitted: boolean = false;

	constructor() {
		this.model = new Model('');
	}
}
