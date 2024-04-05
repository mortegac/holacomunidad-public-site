import React, { useState } from "react";
import Link from "next/link";

import { renderedMenuLinks, LinkLogo } from './utils';

import {
  LeftWrap,
  NavContainer,
  SectionContainer,
  Anchor,
  ButtonContainer
} from "./HeaderStyles";



export const Header = ({
  header,
  pagename,
  activeDocMeta,
}) => {
  const [open, setOpen] = useState(false);
  const [langToggle, setLangToggle] = useState(false);
  const [countryToggle, setCountryToggle] = useState(false);

  activeDocMeta.lang = header.lang;

  const menuLinks = header?.data?.menulinks || [];
  const calltoactiontext = header?.data?.calltoactiontext || [];
  const calltoactionUri = header?.data?.calltoactionUri || {};

  return (
    <NavContainer>
      <SectionContainer>
        <LinkLogo />
        <LeftWrap>
          <ul>{renderedMenuLinks(menuLinks, pagename)}</ul>
          <Link
            key={`top-nav-contactButton`}
            // href={calltoactionUri.url === "" ? `/${linkResolver(calltoactionUri)}` : calltoactionUri.uid}
            href={"contacto"}
            passHref
            prefetch
          >
            {/* <Anchor id={calltoactionUri?.uid} className=""> */}
            <ButtonContainer fullwidth={true}>
              {calltoactiontext[0]?.text || "Contact"}
            </ButtonContainer>
            {/* </Anchor> */}
          </Link>

        </LeftWrap>
      </SectionContainer>
    </NavContainer >
  );
};
