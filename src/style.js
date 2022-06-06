import { Container } from "react-bootstrap";
import styled from "styled-components";
import lightbg from "./assets/images/light.jpg"


export const MainContainer = styled(Container)`
display:flex;
padding:0;
margin:0;
`;

export const MainApp = styled(Container)`
display:flex;
flex-direction: column;
width:100%;
padding: 20px 40px;
margin:0;
background: url(${lightbg})
`