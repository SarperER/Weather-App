import React, { useState } from "react";
import { faBars, faUser, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem, SidebarFooter, SubMenu } from "react-pro-sidebar";
import { menuSettings } from "./config";
import SidebarImage from "../../assets/images/sidebar.jpg";
import MenuLogo from "../../assets/images/menu-logo.png";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import {
  MenuContainer,
  MobileMenuButton,
  MobileMenuButtonIcon,
  SidebarButton,
  SidebarButtonWrapper,
  SidebarContainer,
  SideBarHeader,
  CustomMenu,
} from "./style";

const SideBar = () => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const getAvailableButtons = (menuItem) => {
    if (menuItem.permission) {
      return menuItem.permission.map((perm) => {
        return menuItem?.submenu ? (
          <SubMenu
            key={menuItem.label}
            title={menuItem.label}
            icon={<FontAwesomeIcon icon={menuItem.icon} />}
          >
            {menuItem?.submenu?.map((submenuItem) => {
              return submenuItem.permission.map((subPerm) => (
                <MenuItem key={submenuItem.label}>
                  <Link to={submenuItem.url}>• {submenuItem.label}</Link>
                </MenuItem>
              ));
            })}
          </SubMenu>
        ) : (
          <MenuItem
            key={menuItem.label}
            icon={<FontAwesomeIcon icon={menuItem.icon} />}
            title={menuItem.label}
          >
            <Link to={menuItem.url}>{menuItem.label}</Link>
          </MenuItem>
        );
      });
    } else {
      return (
        <MenuItem
          key={menuItem.label}
          icon={<FontAwesomeIcon icon={menuItem.icon} />}
        >
          <Link to={menuItem.url}>{menuItem.label}</Link>
        </MenuItem>
      );
    }
  };

  return (
    <MenuContainer>
      {!menuCollapsed && (
        <MobileMenuButton onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <MobileMenuButtonIcon icon={faBars} />
        </MobileMenuButton>
      )}
      <SidebarContainer
        breakPoint="lg"
        toggled={menuCollapsed}
        image={SidebarImage}
        onToggle={() => setMenuCollapsed(!menuCollapsed)}
      >
        <SideBarHeader>
          <img alt="sidebar-logo" src={MenuLogo} />
          <span>Aura Weather App</span>
        </SideBarHeader>
        <CustomMenu iconShape="square">
          {menuSettings.map((e) => (
            <React.Fragment key={e.label}>
              {getAvailableButtons(e)}
            </React.Fragment>
          ))}
          {/* <MenuItem icon={<FontAwesomeIcon icon={faUserAlt} />}>
            Çıkış yap
          </MenuItem> */}
        </CustomMenu>
        <SidebarFooter style={{ textAlign: "center" }}>
          <SidebarButtonWrapper>
            <Link to={"/profile"}>
              <SidebarButton>
                <FontAwesomeIcon icon={faUser} />
                <span>{"Sarper ER"}</span>
              </SidebarButton>
            </Link>
            <div />
          </SidebarButtonWrapper>
        </SidebarFooter>
      </SidebarContainer>
    </MenuContainer>
  );
};

export default SideBar;
