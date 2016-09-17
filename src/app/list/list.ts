import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-list',
	template: `
							<ul>
								<li *ngFor="let hero of heroes | async" (click)="onRowClicked(hero)">
									{{ hero }}
								</li>
							</ul>
						`
})

export class ListComponent {
	heroes: Promise<Array<string>>;

	@Output() select: EventEmitter<any> = new EventEmitter();

	constructor() {
		this.heroes = this.getHeroes();
	}

	getHeroes () {
		return new Promise(resolve => {
			resolve(['Dima', 'Tany', 'Sofia'])
		});
	}

	onRowClicked (hero:string) {
		this.select.emit({
			value: hero
		});
	}
}
