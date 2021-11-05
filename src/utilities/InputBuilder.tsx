import { ReactNode } from 'react';
import Input from './Input';
import InputContainer from './InputContainer';
import IUseInput from './IUseInput';

export default class InputBuilder {
	private _label: string = '';
	private _type: string = 'text';
	private _required: boolean = false;
	private _placeholder: string = '';

	constructor(type: string) {
		this._type = type;
	}

	public HasLabel(value: string): InputBuilder {
		this._label = value;
		return this;
	}

	public IsRequired(required: boolean): InputBuilder {
		this._required = required;
		return this;
	}

	public WithPlaceholder(value: string): InputBuilder {
		this._placeholder = value;
		return this;
	}

	public Finalize(hook: IUseInput): ReactNode {
		return (
			<InputContainer label={this._label} validInput={hook.valid}>
				<Input
					placeholder={this._placeholder}
					required={this._required}
					type={this._type}
					value={hook.value}
					setValue={hook.setValue}
					valid={hook.valid}
					setValid={hook.setValid}
				/>
			</InputContainer>
		);
	}
}
