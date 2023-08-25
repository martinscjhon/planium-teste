import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root {
        
        /* Default  */
        --white: #fff;        
        --black: #000;        
        --light-100: #f5f5f5;      
        --sucess: #15ce73; 
       
        /* border-radius (default)  */
        --border-radius-default: 10px;        
                    
        /* Font  */
        --font: "Montserrat";
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html {      
        @media screen and (max-width: 1080px) {
           font-size: 93% !important; //=15px
           width: 100%;
       }

       @media screen (max-width: 720px) {
           font-size: 87% !important; //=14px
           width: 100%;           
       }

       scroll-behavior: smooth;     
       overflow-x: hidden !important;          
    }

   body {
    background-color: #f5f5f5;
    button {
        cursor: pointer;
    }
   }
`
