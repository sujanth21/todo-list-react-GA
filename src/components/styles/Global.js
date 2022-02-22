import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  
  body {
    background: #ccc;
  }
  
  .todo-container {
    display: flex;
    flex-direction: row;
    position: relative;
  }
`;

export default GlobalStyles;
