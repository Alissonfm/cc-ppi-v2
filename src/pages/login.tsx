import React from 'react';
import { Button } from 'office-ui-fabric-react';
import { DarkFullBgImage } from '../components/fbgImage';

const wrapperStyle = {}

const LoginBt = () => {
  const loginClickHandler = () => {
    
  }

  return <Button onClick={loginClickHandler} />
}

const Login = () => {
  return ( 
    <section className='absolute w-100 h-100'>
      <DarkFullBgImage>
        <div className=''>

        </div>
      </DarkFullBgImage>
    </section>
  );
}

export default Login;