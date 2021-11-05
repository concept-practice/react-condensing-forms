import { ReactNode } from 'react';

const InputContainer: React.FC<InputContainerProps> = ({ children, label, validInput }) => {
	return (
		<div className="field">
			<label className="label">{label}:</label>
			<div className="control">{children}</div>
			{!validInput && <p className="help is-danger">This value is invalid.</p>}
		</div>
	);
};

interface InputContainerProps {
	children: ReactNode;
	label: string;
	validInput: boolean;
}

export default InputContainer;
