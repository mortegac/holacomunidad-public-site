import styled from "styled-components";

export const ItemsContainer = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 42px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }

  .item {
    display: flex;
    margin-right: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      padding-bottom: 48px;
      width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
    img {
      // max-width: 80px;
      // max-height: 80px;
      height: 40px;
      margin-bottom: 28px;
      @media (max-width: 460px) {
        padding: 0;
      }
    }
   span{
    margin-top : 16px;
    margin-bottom : 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
    font-size: 16px;
    color: #605E5C;
    text-align: center;
   }
   
   h4 {
    font-size: 18px;
   }
  }
`;
export const ItemsContainerv2 = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 42px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }

  .item {
    display: flex;
    margin-right: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      padding-bottom: 48px;
      width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
    img {
      max-width: 80px;
      max-height: 80px;
      // height: 40px;
      margin-bottom: 28px;
      @media (max-width: 460px) {
        padding: 0;
      }
    }
   span{
    margin-top : 16px;
    margin-bottom : 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
    font-size: 16px;
    color: #605E5C;
    text-align: center;
   }
   
   h4 {
    font-size: 18px;
   }
  }
`;


export const Button = styled.button`
    border-radius: 22px;
    height: 46px;
    padding: 10px 30px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    font-weight:  ${(props) => props.theme.typography.btnText.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.btnText.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.btnText.desktop.fontSize};
    line-height: 24px;
    cursor: pointer; 
    color: ${(props) => props.theme.colors.secondary};
    // background: ${(props) => props.theme.colors.bgColorQuaternary};
    background: transparent;
`;