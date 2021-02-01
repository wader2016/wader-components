import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu mode="vertical" onSelect={e => alert(e)}>
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
          <Button size={ButtonSize.Small}>default</Button>
          <Button>default</Button>
          <Button disabled>default</Button>
          <Button size={ButtonSize.Large}>Large Button</Button>
          <Button btnType={ButtonType.Primary}>Primary</Button>
          <Button btnType={ButtonType.Danger}>Danger</Button>
          <Button btnType={ButtonType.Primary} disabled>Primary disabled</Button>
          <Button btnType={ButtonType.Link} href='#/' disabled={true}>Link disabled</Button>
          <Button btnType={ButtonType.Link} href='#/'>Link</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
