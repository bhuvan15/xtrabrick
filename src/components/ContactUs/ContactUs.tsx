import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import CustomHeading from "@/components/CustomHeading/CustomHeading";
import { CONTACT_US, SOCIAL_ICONS } from "@/constants";
import {
  Container,
  ContentWrapper,
  LeftWrapper,
  InfoText,
  Form,
  Input,
  Select,
  Textarea,
  Button,
  RightWrapper,
  ContactInfoCard,
  ContactItem,
  SocialIconCard,
  IconWrapper,
  IconText,
} from "./ContactUs.styles";

const ContactUs = () => {
  return (
    <Container>
      <Header activeTab="Contact Us" />
      <Image
        src={"/assets/images/contactUsBanner.png"}
        alt={"About Us"}
        layout={"responsive"}
        objectFit={"cover"}
        width={1920}
        height={1080}
        loading={"eager"}
      />
      <CustomHeading heading="Enquiry Form" />
      <ContentWrapper>
        {/* left */}
        <LeftWrapper>
          <InfoText>
            Get in touch to schedule a visit to your new house. Kindly fill this
            form with your details about your enquiries and we would respond
            your enquiry shortly.
          </InfoText>
          <InfoText>Working hours: (Mon - Sat) 10am – 7 pm</InfoText>
          {/* form inputs */}
          <Form>
            <div>
              <Input type="text" placeholder={"Full Name"} />
              <Input type="text" placeholder={"Phone Number"} />
            </div>
            <Input type="text" placeholder={"Email"} />
            <Select>
              <option value="1">1 BHK Flat / Simplex</option>
              <option value="2">2 BHK Flat / Simplex</option>
              <option value="3">3 BHK Flat / Simplex</option>
              <option value="4">Duplex</option>
              <option value="5">Flats / Residential Property</option>
              <option value="6">Shops / Commercial property</option>
              <option value="7">Clinics / Commercial property</option>
              <option value="8">Showroom / Commercial property</option>
              <option value="9">Commercial property</option>
              <option value="10">Developer plots / Non Agricultural Plots</option>
              <option value="11">Loan Services</option>
              <option value="12">Vaastu Shastra Consultation</option>
              <option value="13">Location of Property</option>
            </Select>
            <Textarea placeholder={"Please write your requirements"} rows={8 }></Textarea>
            <Button type="submit">Send</Button>
          </Form>
        </LeftWrapper>
        {/* right */}
        <RightWrapper>
          <ContactInfoCard>
            {CONTACT_US?.map((item, index) => (
              <ContactItem key={index}>
                <IconWrapper>
                  <item.icon fill="#0173B0" />
                </IconWrapper>
                <IconText>
                  <p>{item.heading}</p>
                  <p>{item.info}</p>
                </IconText>
              </ContactItem>
            ))}
          </ContactInfoCard>
          <SocialIconCard>
            {SOCIAL_ICONS?.map((item, index) => (
              <ContactItem
                key={index}
                onClick={() => {
                  if (window && typeof window !== undefined) {
                    window.open(item.link);
                  }
                }}
              >
                <IconWrapper >
                  <item.icon fill="#0173B0" />
                </IconWrapper>
                <IconText>
                  <p>{item.heading}</p>
                  <p>{item.info}</p>
                </IconText>
              </ContactItem>
            ))}
          </SocialIconCard>
        </RightWrapper>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default ContactUs;