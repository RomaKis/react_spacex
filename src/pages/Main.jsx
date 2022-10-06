import topImage from '../assets/images/img-main-top.png'
import React, {useRef, useEffect} from "react";

import {Tours} from '../component/common'
const useMountEffect = fun => useEffect(fun, []);

const Main = () => {
    const refToScrollTours = useRef(null),
    executeScroll = () => refToScrollTours.current.scrollIntoView();
    useMountEffect(executeScroll);

    return (
        <div>
            <img src={topImage} alt="Top Image"/>
            <div onClick={executeScroll}>Explore Tours</div>
            <div ref={refToScrollTours}>Popular tours</div>
            <Tours/>

        </div>
    )
}
export default Main;

