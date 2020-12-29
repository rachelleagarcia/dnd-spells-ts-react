import styled from 'styled-components';

export const SpellItems = styled.div`
  display: flex;

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 44px;
    padding: 0 4px;
    font-weight: 500;
    background: #e4e4e4;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
  }

  div:not(:last-child) {
    margin-right: 24px;
  }

  i {
    position: absolute;
    left: 16px;
    color: #212121;
  }

  .m-1 {
    margin-left: 16px;
  }

  @media (max-width: 1000px) {
    display: initial;

    div {
      margin-top: 16px;
    }
  }
`;
