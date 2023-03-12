import styled from "styled-components";


export const ProfileContainer = styled.section`
  width: fit-content;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.base['800']};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 1.625rem rgba(0,0,0,0.2);

  display: flex;
  gap: 2rem;
`

export const Avatar = styled.img`
  max-width: 9.25rem;
  border-radius: 8px;
` 

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: .5rem;

  h1 {
    flex: 1;
  }

  a {
    align-self: flex-start;
  }
`


export const Footer = styled.footer`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`

export const IconWithText = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;

  svg {
    size: .5rem;
    color: ${props => props.theme.colors.base['500']};
  }
`

export const ExternalLink = styled.a`
  display: inline;
  height: fit-content;
  font-size: .75rem;
  color: ${props => props.theme.colors.brand[500]};
  text-decoration: none;

  svg {
    margin-left: .5rem;
    size: .5rem;
  }

  &:hover {
    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      margin-top: -.5rem;
      background-color: ${props => props.theme.colors.brand[500]}; 
    } 
  }
`