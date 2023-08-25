import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root {
        
        /* Default  */
        --white: #fff;        
        --black: #000;        
        --light: #f5f5f5;    
        --gray:  rgb(94, 88, 115);
        --gray-100: #ebebeb;
        --sucess: #15ce73; 
        --primary: #447488;
        --dark: #4B4B4B;
       
        /* border-radius (default)  */
        --border-radius-default: 10px;        
                    
        /* Font  */
        --font: "Nunito";
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
