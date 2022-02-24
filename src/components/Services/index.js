import React from 'react'
import Icon1 from '../../images/slide1.png';
import Icon2 from '../../images/slide1.png';
import Icon3 from '../../images/slide1.png';
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesH2,ServicesP,ServicesIcon,ServicesCard } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer>
        <ServicesH1>Our Courses</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>MAke us Great</ServicesH2>
                <ServicesP> Its going to work i dont how but its will in no time.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>MAke us Great</ServicesH2>
                <ServicesP> Its going to work i dont how but its will in no time.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>MAke us Great</ServicesH2>
                <ServicesP> Its going to work i dont how but its will in no time.</ServicesP>
            </ServicesCard>
            
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
