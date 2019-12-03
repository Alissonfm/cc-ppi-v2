import React from 'react';
import { Nav } from 'office-ui-fabric-react';
import { useHistory } from 'react-router-dom';


const Menu: React.FunctionComponent = () => {

  const history = useHistory();

  const handleLinkClick = (item: any) => {
    console.log(item);
  }

  const navStructure = [
    {
      links: [
        {
          key: 'ActivityItem',
          name: 'Home',
          url: '#'
        },
        {
          key: 'Breadcrumb',
          name: 'Cadastro',
          url: '#'
        },
        {
          key: 'Button',
          name: 'Treinos',
          url: '#'
        }
      ]
    },
  ];

  return <Nav onLinkClick={handleLinkClick} groups={navStructure}/>
}

const Header = () => {
  return ( 
    <header className='sticky top-0 pa24 ms-bgColor-yellow ms-fontColor-gray ms-depth-8'> 
      <div className='content'>
        <Menu />
      </div>
    </header>
  )
};

export default Header;