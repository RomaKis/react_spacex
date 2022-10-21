import React, {useRef, useEffect} from "react";

import {Tours} from '../component/common'
const useMountEffect = fun => useEffect(fun, []);

const Main = () => {
  const refToScrollTours = useRef(null),
  executeScroll = () => refToScrollTours.current.scrollIntoView();
useMountEffect(executeScroll);

    return (
        <div>
            <div class='btn-explore-tours' onClick={executeScroll}>Explore Tours &#8595;</div>
      <div class='popular-tours' ref={refToScrollTours}>Popuplar tours</div>
            <Tours/>

        </div>
    )
}
export default Main;

