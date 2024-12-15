import {Outlet, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import "./SpaceStyles.css"
import {SpaceNav} from "./SpaceNav";
export function SpaceMain() {
    const location = useLocation();
    const [PathName, setPathName] = useState(null);

    useEffect(() => {
        if (location) {
            let tmp = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);
            setPathName(tmp.substring(1));
        }
    }, [location])

    return (
        <div id={PathName} style={{width: "100%"}}>
            <div>
                <SpaceNav/>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )

}