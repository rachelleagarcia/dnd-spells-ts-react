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
    font-size: 1.5rem;
    position: absolute;
    top: 72px;
  }

  button {
    position: absolute;
    top: 16px;
    right: 16px;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
  }

  span {
    position: absolute;
    bottom: 16px;
    left: 16px;
  }

  .p-bottom {
    position: absolute;
    bottom: 12px;
  }

  .font-sm {
    font-size: 0.85rem;
  }

  .highlight {
    color: #32569b;
  }
`;
