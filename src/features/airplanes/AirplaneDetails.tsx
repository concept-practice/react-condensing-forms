import Airplane from "./Airplane";
import { useHistory } from 'react-router-dom';

const AirplaneDetails: React.FC<AirplaneDetailsProps> = ({ airplane, removeFunc }) => {
  let nav = useHistory();

  return (
      <p className="content">
        {airplane.id} - {airplane.manufacturer} {airplane.model}
        <button className="button is-small is-danger ml-2" onClick={() => removeFunc(airplane.id)}>Remove</button>
        <button className="button is-small is-info ml-2" onClick={() => nav.push(`/airplane/${airplane.id}`)}>Super Details</button>
      </p>
  );
};

interface AirplaneDetailsProps {
  airplane: Airplane;
  removeFunc: (id: string) => void;
}

export default AirplaneDetails;

