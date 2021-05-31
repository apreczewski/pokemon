import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';


import {
  Wrapper,
  Header,
  Body,
  Logo,
  AnchorInput,
  Menu,
  SecondSession,
  TopCards,
  Card,
  TrirdSession,
  Left,
  Right,
  Anchor,
  UserName,
  AnchorSubscribe,
  Subscribe,
  Search,
  // FourSession,
  // Footer,
} from './styles';

import FourSession from '../../components/sessions/FourSession';
import SearchContentTypes from '../../pages/Search';
import Footer from '../../components/Footer';

import { ImSearch } from 'react-icons/im'
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'


import { useHome } from '../../hooks/home';
import Input from '../../components/inputs/InputToValue';

const Home: React.FC = () => {
  const types = ['characters', 'comics', 'creators', 'events', 'series', 'stories']
  const [typeCurrent, setTypeCurrent] = useState(types[0]);
  const { assets, loading, handleLoadData, handleCancelSignal } = useHome();

  const formRef = useRef<FormHandles>(null);

  const handleSearchName = useCallback((type) => {
    const text = formRef?.current?.getData();

    if (!text) {
      console.log('error');
      return;
    }

    handleLoadData({ nameStartsWith: text?.textToSearch, type })
  }, [handleLoadData]);


  return (
    <Wrapper>
      <Header>
        <Anchor>
          <UserName>
            <span>Login</span>
          </UserName>
          <Logo>
            <svg width="130" height="52" xmlns="http://www.w3.org/2000/svg"><rect fill="#EC1D24" width="100%" height="100%"></rect><path fill="#FEFEFE" d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"></path><path fill="#EC1D24" d="M0 0h30v52H0z"></path><path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path></svg>
          </Logo>
          <AnchorSubscribe>
            <Subscribe>
              <img src="https://s3.amazonaws.com/com.marvel.terrigen/qa/styles/thumbnail/s3/icon-mu-shield_0.png" alt="Marvel Unlimited logo" />
              <div>
                <p>Marvel Unlimited</p>
                <span>Subscribe</span>
              </div>
            </Subscribe>
            <Search href="/search">
              <ImSearch size={20} />
            </Search>
          </AnchorSubscribe>
        </Anchor>
        <Menu>
          <a href="/search/characters" >Characters</a>
          <a href="/search/comics" >Comics</a>
          <a href="/search/creators" >Creators</a>
          <a href="/search/events" >Events</a>
          <a href="/search/series" >Series</a>
          <a href="/search/stories" >Stories</a>
        </Menu>
      </Header>
      <Body>
        <SecondSession>
          <TopCards>
            <Card href="/search/Black Widow">
              <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/433ybv_com_crd_01.jpg" alt="image" />
              <div>
                <h4>Black Widow</h4>
                <h5>Yelena Belova</h5>
              </div>
            </Card>
            <Card href="/search/Red Guardian">
              <img src="	https://terrigen-cdn-dev.marvel.com/content/prod/1x/435rgd_com_crd_01.jpg" alt="image" />
              <div>
                <h4>Red Guardian</h4>
                <h5>Alexei Shostakov</h5>
              </div>
            </Card>
            <Card href="/search/Taskmaster">
              <img src="	https://terrigen-cdn-dev.marvel.com/content/prod/1x/173tsk_com_crd_02.jpg" alt="image" />
              <div>
                <h4>Taskmaster</h4>
                <h5>Anthony "Tony" Masters</h5>
              </div>
            </Card>
            <Card href="/search/Shang-Chi">
              <img src="	https://terrigen-cdn-dev.marvel.com/content/prod/1x/242shc_com_crd_01.jpg" alt="image" />
              <div>
                <h4>Shang-Chi</h4>
                <h5></h5>
              </div>
            </Card>
            <Card href="/search/Spider-Man">
              <img src="	https://terrigen-cdn-dev.marvel.com/content/prod/1x/037smm_com_crd_01.jpg" alt="image" />
              <div>
                <h4>Spider-Man</h4>
                <h5>Miles Morales</h5>
              </div>
            </Card>
            <Card href="/search/Knull">
              <img src="	https://terrigen-cdn-dev.marvel.com/content/prod/1x/03-knull_com_crd_01.jpg" alt="image" />
              <div>
                <h4>Knull</h4>
                <h5>God of the Symbiotes</h5>
              </div>
            </Card>
          </TopCards>
        </SecondSession>

        <SearchContentTypes />
        <FourSession />
        <Footer />
      </Body>
    </Wrapper>
  );
}

export default Home;
