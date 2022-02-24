import React from 'react'
import { Button } from '../ButtonElements'
import { Column2, 
    ImgWrap,
    Img,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Column1,
    BtnWrap,
    TextWrapper,
    TopLine,
    Subtitle,
    Heading } from './HeroElements'

const InfoSection = ({
    lightText,
    lightBg,
    id,
    topLine,
    dark,
    alt,
    dark2,
    darkText,
    description,
    primary,
    img,
    headline,
    imgStart,
    buttonlabel
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
          <InfoWrapper>
              <InfoRow imgStart={imgStart}>
              <Column1>
              <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <BtnWrap>
                      <Button to='home' smooth={true} duration={500} spy={true} 
                      exact='true' offset={-80} primary ={primary ? 1 : 0} 
                      dark={dark ? 1:0} dark2={dark2 ? 1:0}>{buttonlabel}</Button>
                      </BtnWrap> 
              </TextWrapper>
              </Column1> 
              <Column2>
              <ImgWrap>
              <Img src={img} alt={alt}/>
              </ImgWrap>
              </Column2>
              </InfoRow>
          </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
