import React, { useEffect, useState } from 'react'

const Preloader = ({isOpen}) => {
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setIsLoad(isOpen)
    }, [isOpen])

    return (
        <>
            {isLoad && (
            <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
        )}
        </>
        
    )
};

export default Preloader
