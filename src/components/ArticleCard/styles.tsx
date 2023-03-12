import styled from "styled-components";


export const ArticleCardContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.base [700]};
  max-height: 16rem;
  max-width: 26rem;

  header {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    span {
      font-size: .75rem;
      min-width: fit-content;
    }

  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`