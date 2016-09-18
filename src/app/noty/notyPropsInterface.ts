export interface NotyProps {
	title: string;
	message: string;
	duration?: number;
	animation?: string;
	closable?: boolean;
	onConfirm?: void;
	onCancel?: void;
}
