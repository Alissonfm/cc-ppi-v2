import React from 'react';

const elementStyle = {
  backgroundImage: 'url(./emptyGym.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center'
};
const darkLayer = {
  backgroundColor: 'rgba(0,0,0,0.6)',
  backdropFilter: 'blur(7px)',
}

export const FullBgImage: React.FunctionComponent = ({children}) => {
  return (
    <div className='db relative w-100 h-100' style={elementStyle}>
      {children}
    </div>
  );
}

export const DarkFullBgImage: React.FunctionComponent = ({children}) => {
  return (
    <div className='db relative w-100 h-100' style={elementStyle}>
      <div className='db relative w-100 h-100' style={darkLayer}>
        {children}
      </div>
    </div>
  );
}