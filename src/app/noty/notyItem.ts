import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NotyProps } from './notyPropsInterface';


@Component({
	selector: 'app-noty-item',
	templateUrl: './notyItem.html',
	styleUrls: ['noty-item.scss']
})

export class NotyItemComponent implements OnInit {
	timeout: any;
	visible: boolean;

	@Output() onItemClose: EventEmitter<any> = new EventEmitter();
	@Input() props: NotyProps;

	ngOnInit() {
		if (this.props.onConfirm || this.props.onCancel) {
			this.props.showButtons = true;
		}
		this.visible = true;
		if (!this.props.autoClose) {
			return;
		}
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
