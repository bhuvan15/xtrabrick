import React from "react";
import Link from "next/link";
import {
  FooterContainer,
  ContentWrapper,
  LinksWrapper,
  FooterLink,
  ContactInfoWrapper,
  LogoImage,
  ContactItemWrapper,
  SocialIconsWrapper,
  CopyrightWrapper,
  CopyrightText,
  FixedFooterContainer,
  FixedFooterText,
  FixedFooterForm,
  FixedFooterInput,
  FixedFooterButton,
} from "./Footer.styles";
import { CONTACT_INFO, FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";
import { theme } from "@/constants/basetheme";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LinksWrapper>
          {FOOTER_LINKS.map((item, index) => (
            <FooterLink key={index}>
              <p className="heading">{item.heading}</p>
              {item.links.map((link, i) => (
                <Link href={link?.link} key={i + index}>
                  <p style={{ fontWeight: 400 }} className={"link"}>
                    {link.name}
                  </p>
                </Link>
              ))}
            </FooterLink>
          ))}
        </LinksWrapper>

        <ContactInfoWrapper>
          <LogoImage
            src="/assets/images/Logo.png"
            alt="XTRABRICK"
            width={207}
            height={116}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            {CONTACT_INFO.map((item, index) => (
              <ContactItemWrapper key={index}>
                <p>{item.heading}</p>
                <div>
                  {item.data.map((info, i) => (
                    <p key={index + i} style={{ color: "#DBE9FF" }}>
                      {info}
                    </p>
                  ))}
                </div>
              </ContactItemWrapper>
            ))}
          </div>
          <SocialIconsWrapper>
            {SOCIAL_LINKS.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (typeof window !== "undefined") window.open(item.link);
                }}
              >
                <item.icon height={20} width={20}/>
              </div>
            ))}
          </SocialIconsWrapper>
        </ContactInfoWrapper>
      </ContentWrapper>

      <CopyrightWrapper>
        <CopyrightText fontFamily={theme.fonts.lato}>
          2022 © xtrabrick. All rights reserved by VIGHNAHATRA AND COMPANY
        </CopyrightText>
      </CopyrightWrapper>
      <FixedFooterContainer>
        <FixedFooterText>
          Do we have everything you&apos;re looking for?
        </FixedFooterText>
        <FixedFooterForm>
          <FixedFooterInput type="text" placeholder="Enter Name" />
          <FixedFooterInput type="email" placeholder="Enter Email" />
          <FixedFooterInput type="phone" placeholder="Enter Phone" />
          <FixedFooterButton>Get a Call Back</FixedFooterButton>
        </FixedFooterForm>
      </FixedFooterContainer>
    </FooterContainer>
  );
};

export default Footer;