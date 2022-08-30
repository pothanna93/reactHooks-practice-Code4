import {useState} from 'react'

import {
  MainContainer,
  ResponsiveDiv,
  Heading,
  Para,
  ImgElement,
  Description,
  ButtonElement,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [read, setRead] = useState(false)

  const onClickRead = () => setRead(prevState => !prevState)

  const description = read
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = read ? 'Read Less' : 'Read More'

  return (
    <MainContainer>
      <ResponsiveDiv>
        <Heading>React Hooks</Heading>
        <Para>Hooks are a new addition to React</Para>
        <ImgElement
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <ButtonElement type="button" onClick={onClickRead}>
          {buttonText}
        </ButtonElement>
      </ResponsiveDiv>
    </MainContainer>
  )
}
export default ReadMore
