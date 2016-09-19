type NotyStyles = 'success' | 'info' | 'warning' | 'error';
type NotyPosition = 'top'
	| 'button'
	| 'left-top'
	| 'right-top'
	| 'left-bottom'
	| 'right-bottom'

export interface NotyProps {
	message: string;
	duration?: number;
	animation?: string;
	closable?: boolean;
	onConfirm?: void;
	onCancel?: void;
	style?: NotyStyles;
	autoClose?: boolean;
	position?: NotyPosition;
	showButtons?: boolean;
}
