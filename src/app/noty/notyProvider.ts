import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { NotyProps } from './notyPropsInterface';


@Injectable()
export class Noty {

	private messagesSource = new Subject<NotyProps>();
	message$ = this.messagesSource.asObservable();
	private defaultOptions: NotyProps = {
		title: 'Title',
		message: 'Message',
		duration: 200,
		animation: 'slide',
		closable: true,
		style: "success",
		autoClose: true
	};

	show(props: NotyProps) {
		props = Object.assign({}, this.defaultOptions, props);
		this.messagesSource.next(props);
	}
}
