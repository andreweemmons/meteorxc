import React from 'react';
import TopMenu from '../components/TopMenu';
import TopImage from '../components/TopImage';
import Backgroundimg from '../components/Backgroundimg';
import FooterMenu from '../components/FooterMenu';

export default class meteorxc extends React.Component {

  render() {
    return (
        <div>
          <TopImage/>
          <TopMenu />
          <Backgroundimg />
          <FooterMenu />
        </div>
    );
  }
}