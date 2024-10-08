
import React, { Component } from 'react'
import First from "../images/png/1121.png"
import Second from "../images/png/2212.png"
import { Container } from 'react-bootstrap'

export default class fifeSection extends Component {
  render() {
    return (
      <Container>
      <div className='fife_section'>
          <h1 className='fife_section_wrapper_title'>Другие услуги для Вашего Бизнеса</h1>
        <div className='fife_section_wrapper'>
          <div className='fife_section_wrapper_card'>
            <div className='fife_section_wrapper_card_wrapper'>
            <h1 className='fife_section_wrapper_card_paragraph'>Домен</h1>
            <p className='fife_section_wrapper_card_title'>Размещайте сайты на быстром хостинге с удобной панелью управления</p>
            <div className='button_box'>
            <button className='fife_section_wrapper_card_button1'>Подробное</button>
            <button className='fife_section_wrapper_card_button2'>Оформить</button>
            </div>
            <img src={First} className='fife_section_wrapper_card_img1' alt="description of image"/>
            </div>
          </div>
          <div className='fife_section_wrapper_card'>
            <div className='fife_section_wrapper_card_wrapper'>
            <h1 className='fife_section_wrapper_card_paragraph'>Хостинг</h1>
              <p className='fife_section_wrapper_card_title'>Размещайте сайты на быстром хостинге с удобной панелью управления</p> 
              <div className='button_box'>
              <button className='fife_section_wrapper_card_button1'>Подробное</button>
              <button className='fife_section_wrapper_card_button2'>Оформить</button>
              </div>
              <img src={Second} className='fife_section_wrapper_card_img1' alt="description of image"/>
              </div>  
          </div>
          </div>
        </div>
      </Container>
    )
  }
}