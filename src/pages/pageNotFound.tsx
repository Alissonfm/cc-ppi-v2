import React from 'react';
import { useHistory } from 'react-router-dom'; 
import { Text, DefaultButton } from 'office-ui-fabric-react';
import { DarkFullBgImage } from '../components/fbgImage';

const PageNotFound = () => {
  const history = useHistory();
  const handleHomeButtonClick = () => { 
    history.push('/');
  }
  const contentClasses = 'w-100 h-100 flex flex-nowrap flex-column justify-center items-center';

  return (
    <section className='w-100 h-100 absolute'>
      <DarkFullBgImage>
        <Text className='f-white tc mb24'>Página não encontrada</Text>
        <DefaultButton onClick={handleHomeButtonClick} className='w-auto bg-tr'> Voltar à Home </DefaultButton>
      </DarkFullBgImage>
    </section>
  );
}

export default PageNotFound;