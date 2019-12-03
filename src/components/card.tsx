import React from 'react';

export const Card: React.FunctionComponent = (props) => {
  const { children } = props;
  return (
    <div className='relative pa12'>
      <div className='pa12 ms-deph-12 bg-white'>
        {children}
      </div>
    </div>
  );
}