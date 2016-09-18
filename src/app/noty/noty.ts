import { Component, OnDestroy } from '@angular/core';
import { Noty } from './notyProvider';
import { NotyProps } from './notyPropsInterface';
import { Subscription } from 'rxjs/Subscription';


@Component({
	selector: 'app-noty',
	templateUrl: './noty.html',
	styleUrls: ['noty.scss']
})

export class NotyComponent implements OnDestroy {
	messages: Array<NotyProps> = [];
	subscription: Subscription;

	constructor(private noty: Noty) {
		this.subscription = noty.message$.subscribe((props: NotyProps) => {
			this.messages.push(props);
		});
	}

	onItemClose(props) {
		var idx = this.messages.indexOf(props);
		this.messages.splice(idx, 1);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
