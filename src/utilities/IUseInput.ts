export default interface IUseInput {
	value: string;
	setValue: (value: string) => void;
	valid: boolean;
	setValid: (setValid: boolean) => void;
}