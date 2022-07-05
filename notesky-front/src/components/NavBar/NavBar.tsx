import { Container, Icon, Menu } from "semantic-ui-react";

export default function NavBar() {

   return (
      <Menu inverted fixed="top">
         <Container>
            <Menu.Item to='/' header>
               <Icon className="large globe" />
               NoteSky
            </Menu.Item>
            <Menu.Item to='/notes' name='Notes' />
            <Menu.Item to='/appuser' name='Users' />
         </Container>
      </Menu>
   )
}