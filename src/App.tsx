import React from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/button';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import Icon from './components/Icon/icon';

library.add(fas);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <hr/>
        <Icon icon="coffee" theme="primary" />
        <hr/>
        <Menu onSelect={e => alert(e)} defaultOpenedMenus={['3']}>
          <MenuItem>
            item 1
          </MenuItem>
          <MenuItem disabled>
            item 2
          </MenuItem>
          <MenuItem>
            item 3
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
            <MenuItem>
              dropdown 3
            </MenuItem>
          </SubMenu>
        </Menu>
        <hr />
        <div>
          <Button size='sm'>default</Button>
          <Button>default</Button>
          <Button disabled>default</Button>
          <Button size='lg'>Large Button</Button>
          <Button btnType='primary'>Primary</Button>
          <Button btnType='danger'>Danger</Button>
          <Button btnType='primary' disabled>Primary disabled</Button>
          <Button btnType='link' href='#/' disabled={true}>Link disabled</Button>
          <Button btnType='link' href='#/'>Link</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
