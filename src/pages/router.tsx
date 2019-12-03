import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Login, PageNotFound, Register, Training } from './pageList'; 
import { Header, Footer } from '../components';

const Template = (props: any) => {
  const { children } = props;
  console.log("props", props);
  return (
    <>
      <Header />
      <div className='w-100 pv24 ms-depth-8'>
        {children}
      </div>
      <Footer />
    </>
  );
};

const RouterService = () => {

const template = (page: any) => <Template>{page}</Template>;

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' children={<Template children={<Home />}/>}/>
        <Route path='/login' children={template(Login)} />
        <Route path='/cadastro' children={template(Register)} />} />
        <Route path='/treino' children={template(Training)} />
        <Route path='*' children={template(PageNotFound)} />
      </Switch>
    </BrowserRouter>
  );
}

export default RouterService;