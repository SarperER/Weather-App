import styled from "styled-components";
import { Accordion } from "react-bootstrap";



export const CustomAccordion = styled(Accordion)`
margin-top:30px;
`;

export const InstantContainer = styled.div`
display:block;
width:800px;
text-align: center;
position:relative;
margin: 0 auto;
`;


export const CustomAccordionHeader = styled(Accordion.Button)`
display: grid;
grid-template-columns: 10% 10% 50% 10% 10% 10%;
row-gap: 50px;
font-weight: bold;
color: slategray;

@media (max-width: 500px) {
    font-size: xx-small;
}
`

export const CustomAccordionBody = styled(Accordion.Body)`
display: grid;
grid-template-columns: repeat(auto-fit, 33%);
min-height:120px;
`

export const CollapseItem = styled.div`
display:flex;
`