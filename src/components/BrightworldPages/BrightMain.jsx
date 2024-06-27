import {BrightNav} from "./BrightNav";
import MStyles from "../../MainStyles.module.scss"
import {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import "./Brightstyles.css"
import LoadingGif from "./BrightLoading.gif"

export function BrightMain() {
    const location = useLocation();
    const [PathName, setPathName] = useState(null);

    useEffect(() => {
        if (location) {
            let tmp = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);
            setPathName(tmp.substring(1));
        }
    }, [location])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Schedule the change to false after 2 seconds
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Cleanup function to clear the timer on unmount
        return () => clearTimeout(timeoutId);
    }, []);

// If page is in loading state, display loading message.
    if (loading) {
        return <img id="Loading" src={LoadingGif}/>;
    }

// If page is not in loading state, display page.
    else {
        return (
            <div id={PathName} style={{width: "100%"}}>
                <div>
                    <BrightNav/>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        )
    }
}