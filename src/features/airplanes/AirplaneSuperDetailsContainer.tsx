import Constants from '../../utilities/Constants';
import { DataFetchDefault } from '../../utilities/DataFetchDefault';
import useDataFetch from '../../utilities/useDataFetch';
import Airplane from './Airplane';
import AirplaneSuperDetails from './AirplaneSuperDetails';

const AirplaneSuperDetailsContainer: React.FC = () => {
	
	const [airplane] = useDataFetch<Airplane>(Constants.BaseUrl, DataFetchDefault.GetById);

	return (
		<div>
			{airplane.map((plane) => <AirplaneSuperDetails airplane={plane}/>)}
		</div>
	);
};

export default AirplaneSuperDetailsContainer;
