import { Link } from "react-router-dom";
import { Container, Icon, Menu } from "semantic-ui-react";

export default function NavBar() {

   return (
      <Menu className="massive" inverted fixed="top" style={{ backgroundColor: "deepskyblue" }}>
         <Container>
            <Menu.Item as={Link} to='/' header>
               <Icon className="large globe" />
               NoteSky
            </Menu.Item>
            <div className="right menu">
               <Menu.Item as={Link} to='/notes' name='Notes' />
               <Menu.Item as={Link} to='/settings' name='Settings' />
               <Menu.Item as={Link} to='/profile' name='Profile' />
            </div>
         </Container>
      </Menu>
   )
}