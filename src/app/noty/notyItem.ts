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

	@Output() onItemClose: EventEmitter<NotyProps> = new EventEmitter();
	@Input() props: NotyProps;

	ngOnInit() {
		if (this.props.confirm && !this.props.exampleMode) {
			if (!this.props.onConfirm || typeof this.props.onConfirm !== 'function') {
				throw 'Noty with prop "confirm" set to true requires onConfirm callback';
			}
		}
		this.visible = true;
		if (!this.props.autoClose) {
			return;
		}
		this.timeout = setTimeout(() => {
			this.onItemClose.emit(this.props);
		}, this.props.duration);
	}

	onConfirm($event) {
		this.onItemClose.emit(this.props);
		clearTimeout(this.timeout);
	}

	onCancel($event) {
		$event.preventDefault();
		$event.stopPropagation();
		this.onItemClose.emit(this.props);
		clearTimeout(this.timeout);
	}
}
