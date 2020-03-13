import React from 'react';
import { Container, Header, Menu, Image, Segment, Grid, List, Icon, Dropdown } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {

  render() {
    return (

        <div style={{backgroundColor: "orange", paddingTop: '20px', marginTop: '40px', paddingBottom: '40px', borderTop: 'solid 5px black', borderBottom: 'solid 5px black'}}>
          <Container className="footerBackground" style={{paddingTop: '20px'}}>
            <Grid style={{backgroundColor: "orange"}}>
              <Grid.Row>
                <Grid.Column>
                  <List style={{textAlign: "center", color: "white", backgroundColor: "orange", fontSize: '1.2em'}}>
                    <List.Item>Website built by AE Designers</List.Item>
                    <List.Item>Website for Meteor XC ICS 314</List.Item>
                    <List.Item>Follow on Social Media for more!</List.Item>
                  </List>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>
    )
  }
}