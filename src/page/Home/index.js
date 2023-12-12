import Slider from "./Slider";
import Introduce from "./Introduce";
import Campaign from "./Campaign";
import Donate from "./Donate";
import Donor from "./Donor";
import RegisterVolunteer from "./RegisterVolunteer";
import News from "./News";
import {useContext, useEffect, useReducer} from "react";
import {MyUserContext} from "../../App";
import UserAction from "../../store/action";


function Home() {
    const {title, changeTitle} = useContext(MyUserContext)
    useEffect(() => {
        changeTitle("Trang chủ")
    }, []);
    return (<>
        {/*<Slider />*/}
        <Introduce />
        <Campaign />
        <Donate />
        <Donor />
        <RegisterVolunteer />
        <News />
    </>);
}

export default Home;
