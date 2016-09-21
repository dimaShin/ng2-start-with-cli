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
		exampleMode: true,
		onConfirm: this.onConfirm
	};

	onConfirm() {
		alert('Confirm clicked');
	}

	onSubmit() {
		this.noty.show(this.config);
	}

	onSuccess() {
		this.noty.show({
			message: 'Success!',
			duration: 1000,
			style: 'success',
			autoClose: true
		});
	}

	onWarning() {
		this.noty.show({
			message: 'Warning!',
			duration: 1000,
			style: 'warning',
			autoClose: true
		});
	}

	onError() {
		this.noty.show({
			message: 'Error!',
			duration: 1000,
			style: 'error',
			autoClose: true
		});
	}

	onInfo() {
		this.noty.show({
			message: 'Info!',
			duration: 1000,
			style: 'info',
			autoClose: true
		});
	}

	constructor(public noty: Noty) {}
}
