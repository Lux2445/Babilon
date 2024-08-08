
import React, { Component } from 'react'
import Cgeck from '../images/svg/check.svg'
import Img from '../images/png/foursection.png'
import { Container } from 'react-bootstrap'


export default class fourSection extends Component {
  render() {
    return (
      <Container>
      <div className='four_section'>
         <h1 className='four_section_wrapper_title'>Какие преимущества вы получите ?</h1>
        <div className='four_section_wrapper'>
           <div className='four_section_wrapper_text'>
            <p className='four_section_wrapper_text_title'><img src={Cgeck} alt="" className='four_section_text_img'/>Круглосуточная поддержка  24/7</p>
            <p className='four_section_wrapper_text_title'><img src={Cgeck} alt="" className='four_section_text_img'/>Безлимитный Трафик</p>
            <p className='four_section_wrapper_text_title'><img src={Cgeck} alt="" className='four_section_text_img'/>Бесплатный резервный канал</p>
            <p className='four_section_wrapper_text_title'><img src={Cgeck} alt="" className='four_section_text_img'/>Гарантированную скорость </p>
            <p className='four_section_wrapper_text_title'><img src={Cgeck} alt="" className='four_section_text_img'/>Возможность подключения в не зависимости от </p>
            <p className='four_section_wrapper_text_title1'>местоположения Вашего Офиса</p>
            <p className='four_section_wrapper_text_title'><img src={Cgeck} alt="" className='four_section_text_img'/>Vip обслуживание</p>
            <p className='four_section_wrapper_text_title'><img src={Cgeck} alt="" className='four_section_text_img'/>Быстрое устранение неполадок </p>
           </div>
           <div className='four_section_wrapper_image'>
           <img src={Img} alt="" className='four_section_wrapper_img'/>
           </div>
        </div>
      </div>    
      </Container>
    )
  }
}
