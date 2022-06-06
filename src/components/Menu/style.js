import styled from "styled-components";
import { ProSidebar, SidebarHeader, Menu } from "react-pro-sidebar";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const MenuContainer = styled.div`
display:block;`;

export const SidebarContainer = styled(ProSidebar)`
  float: left;
  font-family: Pregular;
  > .pro-sidebar-inner > .pro-sidebar-layout::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  > .pro-sidebar-inner > .pro-sidebar-layout::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
  > .pro-sidebar-inner > .pro-sidebar-layout::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.44, #545c64),
      color-stop(0.72, #40474e),
      color-stop(0.86, #23272b)
    );
  }
`;

export const MobileMenuButton = styled(Button)`
  cursor: pointer;
  background: white;
  color: black;
  text-align: center;
  border-radius: 10%;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  display: none;
  top: 5px;
  left: 5px;
  position: fixed;
  z-index: 9999;
  @media (max-width:768px) {
    position: fixed;
    display: flex;
  }
  &:hover {
    background: #657c96;
    animation: shake 0.3s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(1px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-2px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(2px, 0, 0);
    }
  }
`;

export const MobileMenuButtonIcon = styled(FontAwesomeIcon)`
  color: #000000;
`;

export const SidebarButtonWrapper = styled.div`
  padding: 20px 24px;
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const SidebarButton = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 33px;
  border-radius: 40px;
  background: hsla(0, 0%, 100%, 0.05);
  color: #adadad;
  text-decoration: auto;
  margin: 0 auto;
  height: 38px;
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 13px;
  &:hover {
    color: white;
  }
`;

export const SideBarHeader = styled(SidebarHeader)`
  padding: 15px 19px;
  display: flex;
  align-items: center;
  img {
    height: 32px;
  }
  span {
    margin-left: 20px;
  }
`;

export const CustomMenu = styled(Menu)`
height:800px;
`;