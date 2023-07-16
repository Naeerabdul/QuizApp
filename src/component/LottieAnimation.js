import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animation.json';
const LottieAnimation = ({ heightluti, amrgin1, amrgin2, amrgin3 }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }; 
    return (
        <div className={amrgin1 ? `margi1 ` : `""` && amrgin2 ? `marginleft` : `""` && amrgin3 ? `margi` : `""`}>
            <Lottie
                options={defaultOptions}
                height={heightluti}
                width={heightluti}
                eventListeners={[
                    {
                        eventName: 'complete',
                    },
                    {
                        eventName: 'click',
                    },
                ]}
            />
        </div>
    );
};
export default LottieAnimation;