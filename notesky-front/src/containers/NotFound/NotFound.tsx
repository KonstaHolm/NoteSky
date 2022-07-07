import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import NavBar from "../../components/NavBar/NavBar";

export default function NotFound() {
   return (
      <>
         <NavBar />
         <Segment placeholder style={{ marginTop: 60 }}>
            <Header icon>
               <Icon name='search' />
               Oops, something went wrong.
            </Header>
            <Segment.Inline>
               <Button as={Link} to='/notes' style={{ backgroundColor: "deepskyblue", color: "white" }}>
                  Return to notes page
               </Button>
            </Segment.Inline>
         </Segment>
      </>
   )
}