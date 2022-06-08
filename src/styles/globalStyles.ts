import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    overflow-x: hidden;
  }
  body {
    position: relative;
    background-color: ${({ theme }) => theme.colors.white};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-family: ${({ theme }) => theme.typography.family};
  }
  button {
    border: none;
    outline: none;
    background-color: transparent;
  }
  img{
    ::selection{
      pointer-events: none;
    }
  }
  a {
    outline: none;
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
  input {
    outline: none;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.black};
    border-radius: 40px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #5C5A62;
  }
 
`;
