import styled from 'styled-components';

export const SpellItems = styled.div`
  display: flex;

  div {
    background: #e4e4e4;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    width: 250px;
    height: 44px;
    display: flex;
    align-items: center;
    font-weight: 500;
  }

  div:not(:last-child) {
    margin-right: 24px;
  }

  i {
    padding: 12px;
    color: #212121;
  }

  .p-3 {
    padding-left: 32px;
  }

  .p-2 {
    padding-right: 24px;
  }

  .center {
    margin: 0 auto;
  }

  .invert {
    background: #212121;
    color: #fff;
    padding: 12px;
    border-radius: 10px 0 0 10px;
    margin-right: 16px;
  }
`;
