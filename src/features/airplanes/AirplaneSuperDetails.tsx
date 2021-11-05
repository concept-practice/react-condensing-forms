import Airplane from "./Airplane";

const AirplaneSuperDetails: React.FC<AirplaneSuperDetailsProps> = ({airplane}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{airplane.id}</td>
                    <td>{airplane.manufacturer}</td>
                    <td>{airplane.model}</td>
                </tr>
            </tbody>
        </table>
    )
};

interface AirplaneSuperDetailsProps {
    airplane: Airplane;
}

export default AirplaneSuperDetails;