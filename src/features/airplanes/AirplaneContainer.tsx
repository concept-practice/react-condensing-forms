import Constants from '../../utilities/Constants';
import useDataFetch from '../../utilities/useDataFetch';
import Airplane from './Airplane';
import AirplaneGroup from './AirplaneGroup';

const AirplaneContainer: React.FC = () => {
	const [planes, IDataFetch] = useDataFetch<Airplane>(Constants.BaseUrl);

	return (
		<AirplaneGroup
			airplanes={planes}
			addAirplane={IDataFetch.AddEntity}
			removeAirplane={IDataFetch.RemoveEntity}>
		</AirplaneGroup>
	);
};

export default AirplaneContainer;
