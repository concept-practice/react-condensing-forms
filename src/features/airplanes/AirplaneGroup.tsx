import React from "react";
import Airplane from "./Airplane";
import AirplaneDetails from "./AirplaneDetails";
import AirplaneInput from "./AirplaneInput";

const AirplaneGroup: React.FC<AirplaneGroupProps> = ({airplanes, addAirplane, removeAirplane}) => {
    return (
        <React.Fragment>
        <div>
            {airplanes.map((x) => (
            <AirplaneDetails key={x.id} airplane={x} removeFunc={removeAirplane} />
            ))}
        </div>
        <AirplaneInput addAirplane={addAirplane}/>
        </React.Fragment>
    );
};

interface AirplaneGroupProps {
    airplanes: Array<Airplane>;
    addAirplane: (airplane: Airplane) => void;
    removeAirplane: (id: string) => void;
}

export default AirplaneGroup;
