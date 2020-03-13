import React from 'react';
import { Container, Header, Menu, Image, Segment, Grid, List, Icon, Dropdown } from 'semantic-ui-react';

export default class TopMenu extends React.Component {

  render() {
    return (
        <Menu borderless style={{border: "none"}}>
          <Grid container centered>
            <Grid.Row columns={12}>
              <Grid.Column>
                <Menu.Item style={{fontSize: "1.2em"}}><p>Home</p></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item style={{fontSize: "1.2em"}}><p>Tour</p></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item style={{fontSize: "1.2em"}}><p>Music + Videos</p></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item style={{fontSize: "1.2em"}}><p>Photos</p></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Dropdown item text="Links" style={{fontSize: '1.2em'}}>
                </Dropdown>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item style={{fontSize: "1.2em"}}><p>Store</p></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Dropdown item text="Follow" style={{fontSize: '1.2em'}}>
                </Dropdown>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Menu>
    );
  }
}