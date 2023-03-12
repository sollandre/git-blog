import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  h2 {
    flex: 1;
  }

  span {
    font-size: .875rem;
  }
`

export const SearchBarInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.colors.base[950]};
  border: 1px solid ${props => props.theme.colors.base[600]};
  border-radius: 6px;
  padding: .75rem 1rem;
  color: ${props => props.theme.colors.base[100]};

  &::placeholder {
    color: ${props => props.theme.colors.base[500]};
  }

  &:hover, &:focus-within {
    transition: border-color 0.2s;
    border-color: ${props => props.theme.colors.base[500]};
    cursor: text;
  }

`