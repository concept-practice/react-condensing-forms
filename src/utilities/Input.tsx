const Input: React.FC<InputProps> = ({ placeholder, required, type, value, setValue, valid, setValid }) => {
	return (
		<input
			className={`${valid ? '' : 'is-danger'} input`}
			onChange={(e) => {
				setValue(e.target.value);
				setValid(e.target.validity.valid);
			}}
			placeholder={placeholder}
			required={required}
			type={type}
			value={value}></input>
	);
};

interface InputProps {
	placeholder: string;
	required: boolean;
	type: string;
	value: string;
	setValue: (value: string) => void;
	valid: boolean;
	setValid: (valid: boolean) => void;
}

export default Input;
