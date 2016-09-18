import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NotyProps } from './notyPropsInterface';


@Component({
	selector: 'app-noty-item',
	templateUrl: './notyItem.html'
})

export class NotyItemComponent implements OnInit {
	timeout: any;

	@Output() onItemClose: EventEmitter<any> = new EventEmitter();
	@Input() props: NotyProps;

	ngOnInit() {
		this.timeout = setTimeout(() => {
			this.onItemClose.emit(this.props);
		}, this.props.duration);
	}

	onConfirm() {
		this.onItemClose.emit(this.props);
		clearTimeout(this.timeout);
	}

	onCancel() {
		this.onItemClose.emit(this.props);
		clearTimeout(this.timeout);
	}
}
