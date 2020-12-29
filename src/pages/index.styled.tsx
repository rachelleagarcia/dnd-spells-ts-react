import styled from 'styled-components';

export const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SearchSection = styled.div`
  max-width: 721px;
  position: relative;
  margin: 0 auto;

  i {
    position: absolute;
    left: 16px;
    top: 48px;
    color: #8a8a8a;
  }

  input {
    width: 710px;
    height: 42px;
    margin: 32px 0 68px 0;
    padding-left: 42px;
    font-size: 1.2rem;
    border: 2.5px solid #33569b;
    border-radius: 40px;
  }
`;

export const SpellSection = styled.div`
  max-width: 1000px;
  margin: 200px auto 24px;

  p {
    max-width: 528px;
  }
`;
