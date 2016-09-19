import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { NotyProps } from './notyPropsInterface';


@Injectable()
export class Noty {

	private messagesSource = new Subject<NotyProps>();
	message$ = this.messagesSource.asObservable();

	show(props: NotyProps) {
		this.messagesSource.next(props);
	}
}
