import React from 'react'
import styled from 'styled-components';
import { panelLeft, panelRight, gif2, gif1, gifBottom } from '../../assets/images'
// import Gif from './Gif';
import BotBorgs from '../../assets/BotBorgs.zip';

const BackG = styled('div')`
  position: relative;
  z-index: -1;
  background: #24184B;
  padding-bottom: 5rem;
  padding-top: 2rem;
  &:before {
    content: "";
    position: absolute;
    background-image: url(${gifBottom});
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    bottom: -150px;
    left: 0;
  }
  @media (max-width: 1200px) {
    &:before {
      bottom: -100px;
    }
  }
  @media (max-width: 900px) {
    &:before {
      bottom: 0px;
    }
  }
`;

const ImageLeft = styled('div')`
  position: relative;
  &:after {
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    background-image: url(${gif1});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 407.5px;
    width: 407.5px;
    top: 190px;
    left: 270px;
  }
  @media (max-width: 1450px) {
    &:after {
      height: 362px;
      width: 362px;
      top: 165px;
      left: 240px;
    }
  }
  @media (max-width: 1200px) {
    &:after {
      height: 245px;
      width: 245px;
      top: 112.5px;
      left: 160px;
    }
  }
  @media (max-width: 900px) {
    margin-right: auto;
  }
  @media (max-width: 600px) {
    padding-top: 5rem;
    &:after {
      height: 205px;
      width: 205px;
      top: 173.5px;
      left: 135px;
    }
  }
`;

const Body = styled('div')`
  position: absolute;
  z-index: 1;
  top: 215px;
  left: 266px;
  font-size: 24px;
  width: 425px;
  color: #b5dff0;
  text-align: center;
  @media (max-width: 1450px) {
    top: 200px;
    left: 240px;
    width: 360px;
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    width: 250px;
    top: 130px;
    left: 160px;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    width: 200px;
    top: 110px;
    left: 140px;
    font-size: 11.5px;
  }
`;

const ImageRight = styled('div')`
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    background-image: url(${gif2});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 355px;
    width: 355px;
    top: 267px;
    left: 90px;
  }
  @media (max-width: 1450px) {
    &:after {
      height: 312px;
      width: 312px;
      top: 234.5px;
      left: 80px;
    }
  }
  @media (max-width: 1200px) {
    &:after {
      height: 213px;
      width: 213px;
      top: 160px;
      left: 55px;
    }
  }
  @media (max-width: 900px) {
    margin-left: auto;
  }
  @media (max-width: 600px) {
    &:after {
      height: 177px;
      width: 177px;
      top: 134px;
      left: 45px;
    }
  }
`;



export default function Gif() {

  return (
    <div id="gif">
      <BackG>
        <div className="gifRoot">
          <ImageLeft>
            <img src={panelLeft} alt="panel left" />
          </ImageLeft>
          <ImageRight>
            <img src={panelRight} alt="panel right" />
          </ImageRight>
        </div>
      </BackG>
    </div>
  )
}