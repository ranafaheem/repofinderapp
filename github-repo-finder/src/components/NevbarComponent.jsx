import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";


const NavbarComponent=()=> {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar color="deepPurple" navbar>
        <NavbarContainer>
            <NavbarWrapper>
                    <NavbarBrand>GitHub Repo finder App</NavbarBrand>
                    <NavbarToggler
                        color="white"
                        onClick={() => setOpenMenu(!openMenu)}
                        ripple="light"
                    />
                </NavbarWrapper>

            
        </NavbarContainer>
    </Navbar>
  );
}

export default NavbarComponent;