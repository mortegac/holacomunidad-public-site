import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top:102px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export const Description = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-left: 200px;

  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-left: 0;
  }
  h1 {
    margin: 0;
    margin-bottom: 24px;
    
    line-height:  ${(props) => props.theme.typography.h1.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h1.desktop.fontSize};
    color: ${(props) => props.theme.colors.primary};
    em { 
      color: ${(props) => props.theme.colors.textLightPrimary};
      font-style: normal;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      line-height:  ${(props) => props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
      margin-bottom: 16px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      line-height:  ${(props) => props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
    }
    
  }
  p {
    margin: 0;
    letter-spacing: 0.25px;
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 32px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      line-height:  ${(props) => props.theme.typography.p.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.p.mobile.fontSize};
    }
  }
`;

export const ImgHolder = styled.div`
  z-index: 2;
  backgroundImage: ${(props) => props.bgImage || ""}
  width: 50%;
  img {
    width: 100%;
    border-radius: 50%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
    border-radius: 24px;
    img {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
    border-radius: 22px;
    height: 46px;
    padding: 10px 30px;
    border: transparent;
    font-size: 16px;
    margin-top: 18px;
    line-height: 24px;
    width:142px;
    height:48px;
    cursor: pointer; 
    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.bgColorQuaternary};
`;
