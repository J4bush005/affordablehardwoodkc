import React, {useState, useEffect} from 'react';
import {FaAngleDoubleUp} from 'react-icons/fa'

const ScrollToTop = () => {
    const [showScrollTopButton, sethowScrollTopButton] = useState(false);

    useEffect(() => {
        if(window.screenY > 300) {
            sethowScrollTopButton(true)
        } else {
            setShowScrollTopButton(false)
        }
    }, []);

    const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return (
        <div>
       {showScrollTopButton &&  <FaAngleDoubleUp className='top-bt-position' onclick={ScrollToTop} />}
       </div>
    );
};

export default ScrollToTop 