import styled from 'styled-components';

export const SpellCard = styled.div`
  position: relative;
  width: 300px;
  height: 176px;
  padding: 16px;
  margin: 24px;
  border-radius: 18px;
  border: 1px solid #cbcbcb;

  h2 {
    position: absolute;
    top: 72px;
    max-width: 180px;
    font-size: 1.5rem;
  }

  button {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 0;
    margin: 0;
    border: none;
    background: none;
  }

  .spell-props {
    position: absolute;
    right: 16px;
    bottom: 12px;
  }

  .inline {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 12px;
  }

  .icon {
    font-size: 1.2rem;
  }

  .icon-a {
    position: absolute;
    padding: 0 8px;
    left: 0;
  }

  .highlight {
    font-size: 0.75rem;
    padding-right: 8px;
    color: #32569b;
  }
`;

export const SpellLevel = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 0;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: #32569b;
  color: #fff;
`;

export const SpellItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 64px;
  margin-top: 8px;
  padding: 16px 8px 16px 25px;
  border-radius: 10px;
  font-size: 0.75rem;
  background-color: #e4e4e4;

  span {
    position: absolute;
    right: 8px;
  }
`;
