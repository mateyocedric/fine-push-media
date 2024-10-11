/* eslint-disable import/no-extraneous-dependencies */

import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';


const FlipClock = dynamic(() => import('@leenguyen/react-flip-clock-countdown'), {
  ssr: false,
});


const ComingSoonFlipClock = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <FlipClock
        // className='flip-clock'
        to={new Date('07/07/2025 21:30').getTime()}
        spacing={{
          clock: 10,
          digitBlock: 5
        }}
        stopOnHiddenVisibility
        // labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        labelStyle={{ fontSize: 5, fontWeight: 500, textTransform: 'uppercase' }}
        digitBlockStyle={{ width: 30, height: 40, fontSize: 15, borderRadius: 5, backgroundColor: 'black', color: 'white', }}
        dividerStyle={{ color: '#a8a8a8', height: 1 }}
        separatorStyle={{ color: 'whitesmoke', size: '2px' }}
        duration={0.5}
      />
    )
  )
}

export default ComingSoonFlipClock