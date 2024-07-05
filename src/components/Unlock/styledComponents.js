import styled from 'styled-components'

export const MainContainer = styled.div`
   background-image:linear-gradient(#0b0c1e, #3c2940);
   min-height:100vh;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:space-between;
   padding-top:160px;
   padding-bottom:160px;
   
   @media screen and (min-width:768px) {
   padding-top:100px;
   padding-bottom:100px;
   }
`

export const LockImageContainer = styled.div`
   display:flex;
   flex-direction:column;
`
export const LockImage = styled.img`
   width:30vw;
   align-self:center;
   @media screen and (min-width:768px) {
      width:10vw;
   }
`
export const LockText = styled.p`
   color:#ffffff;
   font-family:"Roboto";
   font-weight:500;
    @media screen and (min-width:768px) {
      font-size:25px;
      font-weight:400;
   }
`
export const LockButton = styled.button`
   color:#ffffff;
   font-family:"Roboto";
   font-weight:500;
   background-color:#06b6d4;
   height:40px;
   width:100px;
   border-radius:10px;
   border:none;
   outline:none;
   cursor:pointer;
`
