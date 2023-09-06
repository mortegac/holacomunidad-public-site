import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export const StoresSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Description = styled.div`
   
  
  
  #htmlContainer {
    max-width: 1054px;
    padding: 0 15px;
    width: 100%;

    strong {
      a {
        font-weight: 700;
      }
    }
    
    h1 {
      color: rgba(0, 17, 51, 0.8);
      font-size: 40px;
      font-weight: 700;
      line-height: 64px;
    }
    
    h2 {
      font-size: 32px;
      color: rgba(0, 17, 51, 0.8);
    }

    h3 {
      color: rgba(0, 17, 51, 0.8);
      margin: 18.72px 0px;
      font-size: 28px;
      font-weight: 700;
      line-height: 28px;
    }

    h4 {
      margin-bottom: 10px;
      color: rgba(0, 17, 51, 0.9);
      font-family: "Poppins";
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }
    li,
    p {
      line-height: 25px;
      font-size: 14px;
      color: rgba(0, 17, 51, 0.6);
    }
    p {
      margin: 14px 0px;
    }
    a {
      font-weight: normal;
    }
    table {
      tbody {
        tr {
          color: rgba(0, 17, 51, 0.8);
        }
      }
      &.table-container {
        text-align: left;
        border-collapse: collapse;
        border: 1px solid #00113326;
        width: 100%;
        box-sizing: border-box;
        &.one {
          border: none;
          tr,
          td {
            border: none;
          }
          tr {
            padding: 0;
            width: 100%;
            display: flex;
            flex-direction: row;
            td {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
              width: 50%;
              border: 1px solid #00113326;
            }
          }
        }
        th {
          border: 1px solid #00113326;
          max-width: 50%;
          width: 100%;
          padding-left: 15px;
          .table-title {
            max-width: 25%;
          }
        }
        tr {
          border: 1px solid #00113326;
          padding-left: 15px;
        }
        td {
          border: 1px solid #00113326;
          padding: 15px;
        }
      }
    }
  }
  
  
`;
// export const Description = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 100%;
//   margin-right: 100px;
//   align-items: center;
//   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//     width: 100%;
//     margin-right: 0;
//   }

//   h2 {
//     margin: 0;
//     margin-bottom: 24px;
//     font-weight: ${(props) => props.theme.typography.h2.desktop.fontWeight};
//     line-height: ${(props) => props.theme.typography.h2.desktop.lineHeight};
//     font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
//     color: ${(props) => props.theme.colors.secondary};
//     text-align: center;
//     @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//       width: 70%;
//       font-weight: ${(props) => props.theme.typography.h2.mobile.fontWeight};
//       line-height: ${(props) => props.theme.typography.h2.mobile.lineHeight};
//       font-size: ${(props) => props.theme.typography.h2.mobile.fontSize};
//       margin-bottom: 16px;
//     }
//   }
//   h3 {
//     font-weight: ${(props) => props.theme.typography.h3.desktop.fontWeight};
//     line-height: ${(props) => props.theme.typography.h3.desktop.lineHeight};
//     font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
//     text-align: center;
//     color: ${(props) => props.theme.colors.secondary};
//     margin-bottom: 8px;
//     @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//       width: 70%;
//       margin-bottom: 16px;
//       font-weight: ${(props) => props.theme.typography.h3.mobile.fontWeight};
//       line-height: ${(props) => props.theme.typography.h3.mobile.lineHeight};
//       font-size: ${(props) => props.theme.typography.h3.mobile.fontSize};
//     }
//   }
// `;


export const Button = styled.button`
margin-top: 36px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-weight: bold;
font-family: ${(props) => props.theme.typography.fontFamily};
white-space: nowrap;
border-radius: ${(props) => props.theme.button.borderRadius};
font-size: 16px;
line-height: 24px;
border: none;
cursor: pointer;
transition: background 0.3s ease;
width: fit-content;
height: ${(props) => props.theme.button.height};
background:${(props) => props.theme.button.bgPrimary};
border: 1px solid ${(props) => props.theme.button.bgPrimary};
color:${(props) => props.theme.colors.white};
:hover {
  background-color: ${(props) => props.theme.button.bgPrimaryOver};
  color: ${(props) => props.theme.colors.white};
}
padding:${(props) => props.theme.button.padding};


@media (max-width: ${(props) => props.theme.breakpoints.md}) {
  width: 100%;
}
`;


// export const Button = styled.button`
//   border-radius: 22px;
//   height: 46px;
//   padding: 10px 30px;
//   border: transparent;
//   font-weight: ${(props) => props.theme.typography.btnText.desktop.fontWeight};
//   line-height: ${(props) => props.theme.typography.btnText.desktop.lineHeight};
//   font-size: ${(props) => props.theme.typography.btnText.desktop.fontSize};
//   line-height: 24px;
//   cursor: pointer;
//   color: ${(props) => props.theme.colors.secondary};
//   background: ${(props) => props.theme.colors.bgColorQuaternary};
//   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//     font-weight: ${(props) => props.theme.typography.btnText.mobile.fontWeight};
//     line-height: ${(props) => props.theme.typography.btnText.mobile.lineHeight};
//     font-size: ${(props) => props.theme.typography.btnText.mobile.fontSize};
//   }

//   &:hover {
//     background-color: ${(props) => props.theme.colors.bgHoverBtn};
//   }
//   &:active {
//     transform: scale(0.95);
//   }
//   &:disabled {
//     cursor: default;
//     opacity: 0.7;
//   }
// `;
