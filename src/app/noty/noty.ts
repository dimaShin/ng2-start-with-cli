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

	private defaultOptions: NotyProps = {
		message: 'Message',
		duration: 200,
		animation: 'slide',
		closable: true,
		style: "info",
		autoClose: true,
		exampleMode: false
	};

	constructor(private noty: Noty) {
		this.subscription = noty.message$.subscribe((props: NotyProps) => {
			props = Object.assign({}, this.defaultOptions, props);
			this.messages.unshift(props);
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
