import { Component, Injectable } from '@angular/core';
import { NotyProps } from '../noty/notyPropsInterface';
import {Noty} from "../noty/notyProvider";

@Component({
	selector: 'noty-example',
	templateUrl: './example.component.html',
	styleUrls: ['example.component.scss']
})

export class ExampleComponent implements Injectable{
	notyStyles = [ 'success', 'info', 'warning', 'error' ];
	notyPositions = [
		'top',
		'bottom',
		'left-bottom',
		'right-bottom',
		'left-top',
		'right-top'
	];
	animations = ['slide'];
	config: NotyProps = {
		message: 'This is Message!',
		duration: 1000,
		animation: 'slide',
		style: 'success',
		position: 'right-top',
		closable: true,
		autoClose: false,
		confirm: false,
		exampleMode: true
	};

	onSubmit() {
		this.noty.show(this.config);
	}

	constructor(public noty: Noty) {}
}
