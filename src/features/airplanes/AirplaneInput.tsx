import React from 'react';
import InputBuilder from '../../utilities/InputBuilder';
import useInput from '../../utilities/useInput';
import Airplane from './Airplane';

const AirplaneInput: React.FC<AirplaneInputProps> = ({ addAirplane }) => {
	const manufacturerHook = useInput();
	const modelHook = useInput();

	const HandleSubmit = (event: React.FormEvent) => {
		const airplane: Airplane = {
			id: '',
			manufacturer: manufacturerHook.value,
			model: modelHook.value,
		};

		addAirplane(airplane);

		event.preventDefault();
	};

	return (
		<form onSubmit={HandleSubmit}>
			{new InputBuilder('text').HasLabel('Manufacturer').IsRequired(true).WithPlaceholder('Manufacturer').Finalize(manufacturerHook)}
			{new InputBuilder('text').HasLabel('Model').IsRequired(true).WithPlaceholder('Model').Finalize(modelHook)}
			<button className="button is-primary" type="submit">
				Add Airplane
			</button>
		</form>
	);
};

interface AirplaneInputProps {
	addAirplane: (airplane: Airplane) => void;
}

export default AirplaneInput;
