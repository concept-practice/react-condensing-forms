import { useState } from 'react';
import IUseInput from './IUseInput';

export default function useInput(): IUseInput {
	const [value, setValue] = useState<string>('');
	const [valid, setValid] = useState<boolean>(true);

	return {
		value: value,
		setValue: setValue,
		valid: valid,
		setValid: setValid,
	};
}
