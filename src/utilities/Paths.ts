import AirplaneContainer from "../features/airplanes/AirplaneContainer";
import AirplaneSuperDetailsContainer from "../features/airplanes/AirplaneSuperDetailsContainer";
import LinkPath from "./LinkPath";

export default class Paths {
    public static Details(): LinkPath {
        return new LinkPath('/airplane/:id', 'Details', AirplaneSuperDetailsContainer);
    }

	public static Home(): LinkPath {
		return new LinkPath('/', 'Home', AirplaneContainer);
	}

	public static AllPaths(): Array<LinkPath> {
		return [this.Details(), this.Home()];
	}
}
