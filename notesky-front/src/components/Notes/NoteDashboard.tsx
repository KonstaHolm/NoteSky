import { Card, Container, Grid, Segment, TextArea } from "semantic-ui-react";

export default function Notes() {
   return (
      <Segment style={{ marginTop: 60, backgroundColor: "white" }}>
         <Container style={{ marginTop: 60 }}>
            <Grid>
               <Grid.Column width={4}>
                  <Card>
                     <Card.Content>
                        <TextArea rows={5} style={{ maxWidth: 230 }} placeholder="Template"></TextArea>
                     </Card.Content>
                  </Card>
               </Grid.Column>
               <Grid.Column width={4}>
                  <Card>
                     <Card.Content>
                        Template
                     </Card.Content>
                  </Card>
               </Grid.Column>
               <Grid.Column width={4}>
                  <Card>
                     <Card.Content>
                        Template
                     </Card.Content>
                  </Card>
               </Grid.Column>
               <Grid.Column width={4} >
                  <Card>
                     <Card.Content>
                        Template
                     </Card.Content>
                  </Card>
               </Grid.Column>
            </Grid>
         </Container>
      </Segment >
   )
}