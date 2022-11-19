import Slider from "react-slick";
import '../App.css';
import React, { Component } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import image1 from '../images/MetaverseMagna.jpg'
import image2 from '../images/DojimaNetwork.jpg'
import image3 from '../images/MetaWebVentures.jpg'
import image4 from '../images/Optimism.jpg'
import image5 from '../images/SingleEarth.jpg'
import image6 from '../images/TrialXtreme.png'
import image7 from '../images/MetaverseGo.jpg'
import image8 from '../images/MagicSquare.png'
import image9 from '../images/XDAO.jpg'
import image10 from '../images/BitsCrypto.jpg'
import image11 from '../images/DebtDAO.jpg'
import image12 from '../images/SpaceTime.jpg'
import image13 from '../images/KreskoFi.jpg'
import image14 from '../images/Center.jpg'
import image15 from '../images/Sui.jpg'
import image16 from '../images/IronFish.jpg'
import image17 from '../images/BIFROST.jpg'
import image18 from '../images/LayerZero.jpg'
import image19 from '../images/ObolLabs.jpg'
import image20 from '../images/Vega.jpg'
import image21 from '../images/Aleo.png'
import { useEffect } from "react";


export default function SwipeToSlide() {    
      // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
      const [changeSizeScreen, setChangeSizeScreen] = React.useState()

      const settings = {
        className: "center home__slider__container",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        
        afterChange: function(index) {
          console.log(
            `${index + 1}`
          );
        },
        widthScreen: function getSizeScreen() {
          let widthScreen = document.documentElement.clientWidth
          if(widthScreen < 880) settings.slidesToShow = 3
          if(widthScreen < 600) settings.slidesToShow = 1
        }
      };

      settings.widthScreen()

      return (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
              },
              margin: '0 auto',
            }}
          >

              


          <Paper elevation={5} className="home__slider__wrap">
            <h3>Тестнеты</h3>
            <Divider />
            <div className="home__slider__container">
              <Slider {...settings}>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image8}")`}}></div>
                  <div className="home__slider_item__title">Magic Square</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image9}")`}}></div>
                  <div className="home__slider_item__title">XDAO - Token2049</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image10}")`}}></div>
                  <div className="home__slider_item__title">Bits Crypto</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image11}")`}}></div>
                  <div className="home__slider_item__title">Debt DAO</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image12}")`}}></div>
                  <div className="home__slider_item__title">Space and Time</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image13}")`}}></div>
                  <div className="home__slider_item__title">Kresko Fi</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image14}")`}}></div>
                  <div className="home__slider_item__title">Center</div>
                </div>
              </Slider>
            </div>
            <div className="home__slider__more">Открыть все проекты</div>
            
          </Paper>
          <Paper elevation={5} className="home__slider__wrap">
            <h3>Амбассадорки</h3>
            <Divider />
            <div style={{width: '720px', margin: '20px auto'}} className="home__slider__container">
              <Slider {...settings}>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image1}")`}}></div>
                  <div className="home__slider_item__title">Metaverse Magna</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image2}")`}}></div>
                  <div className="home__slider_item__title">DojimaNetwork</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image3}")`}}></div>
                  <div className="home__slider_item__title">MetaWeb Ventures</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image7}")`}}></div>
                  <div className="home__slider_item__title">MetaverseGo</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image6}")`}}></div>
                  <div className="home__slider_item__title">Trial Xtreme</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image4}")`}}></div>
                  <div className="home__slider_item__title">Optimism</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image5}")`}}></div>
                  <div className="home__slider_item__title">Single.Earth</div>
                </div>
              </Slider>
            </div>
            <div className="home__slider__more">Открыть все проекты</div>
          </Paper>
          <Paper elevation={5} className="home__slider__wrap">
            <h3>Ноды</h3>
            <Divider />
            <div className="home__slider__container">
              <Slider {...settings}>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image15}")`}}></div>
                  <div className="home__slider_item__title">Sui</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image16}")`}}></div>
                  <div className="home__slider_item__title">Iron Fish</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image17}")`}}></div>
                  <div className="home__slider_item__title">BIFROST</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image18}")`}}></div>
                  <div className="home__slider_item__title">LayerZero Labs</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image19}")`}}></div>
                  <div className="home__slider_item__title">Obol Labs</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image20}")`}}></div>
                  <div className="home__slider_item__title">Vega Protocol</div>
                </div>
                <div className="home__slider_item__container">
                  <div className="home__slider_item__image" style={{backgroundImage: `url("${image21}")`}}></div>
                  <div className="home__slider_item__title">Aleo</div>
                </div>
              </Slider>
            </div>
            <div className="home__slider__more">Открыть все проекты</div>
          </Paper>
        </Box>
      );
    }
  