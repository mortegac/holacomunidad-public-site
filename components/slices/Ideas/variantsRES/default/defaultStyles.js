import styled from "styled-components";

export const Content = styled.div`
  padding: 64px 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  background-image: url("https://minifit.cdn.prismic.io/minifit/40b0d116-7bad-4ee5-a01c-eac8151fffb3_nadadora.svg");
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: 32%;
  
  
  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: 70%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-right: 100px;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }

  h2 {
    margin: 0;
    margin-bottom: 24px;
    font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    color: ${(props) => props.theme.colors.textDarkblue};
    text-align: center;
    em { 
      color: ${(props) => props.theme.colors.textLightPrimary};
      font-style: normal;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
      margin-bottom: 16px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      line-height:  ${(props) => props.theme.typography.h2.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.h2.mobile.fontSize};
    }
  }
  // h2 {
  //   margin: 0;
  //   margin-bottom: 24px;
  //   font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
  //   line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
  //   font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
  //   color: ${(props) => props.theme.colors.secondary};
  //   text-align: center;
  //   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
  //     width: 70%;
  //     font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
  //     line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
  //     font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
  //     margin-bottom: 16px;
  //   }
  // }
  // h3 {
  //   font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
  //   line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
  //   font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
  //   text-align: center;
  //   color: ${(props) => props.theme.colors.secondary};
  //   margin-bottom: 8px;
  //   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
  //     width: 70%;
  //     margin-bottom: 16px;
  //     font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
  //     line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
  //     font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
  //   }
  // }
`;

export const Button = styled.button`
    border-radius: 22px;
    height: 46px;
    padding: 10px 30px;
    border: transparent;
    font-weight:  ${(props) => props.theme.typography.btnText.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.btnText.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.btnText.desktop.fontSize};
    line-height: 24px;
    cursor: pointer; 
    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.bgColorQuaternary};
`;