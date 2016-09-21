import {
	Component,
	Input,
	Output,
	OnInit,
	EventEmitter,
	OnDestroy
} from '@angular/core';
import { NotyProps } from './notyPropsInterface';



@Component({
	selector: 'app-noty-item',
	templateUrl: './notyItem.html',
	styleUrls: ['noty-item.scss']
})

export class NotyItemComponent implements OnInit, OnDestroy {
	timeout: any;
	hoveredConfirm: boolean = false;
	region: string = '';

	@Output() onItemClose: EventEmitter<NotyProps> = new EventEmitter();
	@Input() props: NotyProps;

	ngOnDestroy() {
		clearTimeout(this.timeout);
	}

	ngOnInit() {

		switch (this.props.position) {
			case 'left-top' || 'left-bottom': {
				this.region = 'left';
				break;
			}
			case 'right-top' || 'right-bottom': {
				this.region = 'right';
				break;
			}
			case 'top': {
				this.region = 'top';
				break;
			}
			case 'bottom': {
				this.region = 'bottom';
				break;
			}
			default: {
				this.props.position = 'right-top';
				this.region = 'right';
			}
		}

		if (this.props.confirm && !this.props.exampleMode) {
			if (!this.props.onConfirm || typeof this.props.onConfirm !== 'function') {
				throw 'Noty with prop "confirm" set to true requires onConfirm callback';
			}
		}
		if (!this.props.autoClose) {
			return;
		}
		this.timeout = setTimeout(() => {
			this.close();
		}, this.props.duration);
	}

	close() {
		this.onItemClose.emit(this.props);
	}

	onConfirm($event) {
		this.close();
		if (this.props.exampleMode) {
			alert('Confirm Clicked');
		}
		clearTimeout(this.timeout);
		$event.stopPropagation();
	}

	onCancel($event) {
		$event.preventDefault();
		$event.stopPropagation();
		this.close();

		clearTimeout(this.timeout);
	}

	onMouseOver($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$event.stopImmediatePropagation();
		this.hoveredConfirm = true;
	}

	onMouseLeave() {
		this.hoveredConfirm = false;
	}
}
