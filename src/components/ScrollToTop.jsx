import React, {useState, useEffect} from 'react'

const ScrollToTop = () => {
    const [showScrollTopButton, sethowScrollTopButton] = useState(false);

    useEffect(() => {
        if(window.screenY > 300) {
            sethowScrollTopButton(true)
        } else {
            setShowScrollTopButton(false)
        }
    }, []);

    return (
        <div></div>
    )
}

export default ScrollToTop 