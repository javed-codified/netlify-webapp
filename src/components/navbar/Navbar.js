import React from "react";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


import {
    Nav,
    Navbar,
    Form,
    FormControl,
    Button,
    NavDropdown,
  } from 'react-bootstrap'
  const { SubMenu } = Menu;

const NavBar = () => {
  return (
    <div>
       <Menu  mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    
      {/* <Navbar bg="light" fixed="top" expand="lg">
        <Navbar.Brand href="#home">Droix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Android Devices</Nav.Link>
            <NavDropdown title="MoreItems" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mini PC & IT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gaming
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SmartHome</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Refurbished
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Button className="btn-primary m-1" >Login</Button>
        <Button className="btn-primary m-1" >SignUp</Button>
      </Navbar> */}
    </div>
  );
};

export default NavBar;