import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  --primary-light: #b0edfd;
  /* Primary Color */
  --primary: #61DBFB;
  --primary-dark: #316e7e;
  --border: 1px solid #61DBFB;
  --transition: all 0.3s linear;
  --nav-height: 61px;
  --min-footer-height: 11vh;
  --card-height: 29rem;
}
/*
=============== 
Global Styles
===============
*/
body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
}
a:hover {
  cursor: pointer;
}
.navbar {
  border-bottom: var(--border);
  img {
    background: ${({ theme }) =>
        theme.name === "light" ? "#45413C" : "#797B7B"};
  }

}
.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: ${({ theme }) => theme.color};
  &:hover {
        color: var(--primary);
      }
}
.section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;
}
.title {
    font-family: "Permanent Marker";
}
.card {
  height: var(--card-height);
  border: var(--border);
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
  .card-img-top {
    height: 50%;
    object-fit: contain;
  }
}
.page-item.active .page-link {
    background-color: var(--primary);
    border-color: var(--primary);
}
.active{
  font-weight: 500;
}
@media screen and (min-width: 800px) {
  .link-icons {
    font-size: 2.5rem;
  }
  .form-group {
      max-width: 750px;
    }
}
 @media screen and (min-width: 1367px) {
  .link-icons:hover {
    color: var(--primary);
  }
}
.home{
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   // #d9d9e3
    .container{
        background: ${({ theme }) => (theme.name === "light" ? "#fff" : "#797B7B")};
        border: 1px ${({ theme }) => (theme.name === "light" ? "solid black" : "solid white")};
        border-radius: 10px;
        width: 80%;
        height: 80%;
        display: flex;        
        --bs-gutter-x: 0; // Set Bootstrap gutter to 0 to fix spacing */
        overflow: hidden;

        .sidebar{
            flex: 1;
            border-right: 1px solid red;
            flexDirection: column;
            background-color: ${({ theme }) => (theme.name === "light" ? "#A6ACAF" : "#212121")}

            .chat
        }
        .chat{
            flex: 2;
      }
    }
  }
}
`;

export default GlobalStyle;