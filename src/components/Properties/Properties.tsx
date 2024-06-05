import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import {
 AMENITIES_PROVIDED,
 COMMERCIAL_PROPERTIES,
 COMMERCIAL_PROPERTIES_WIDGET,
 DEVELOPER_PLOTS,
 DEVELOPER_PROPERTIES,
 LOCATION_BENEFITS,
 PROPERTIES_NAVIGATOR,
 RESIDENTIAL_PROPERTIES,
} from "@/constants";
import CustomHeading from "@/components/CustomHeading/CustomHeading";
import VaastuDetailsContainer from "@/components/Vaastu/VaastuDetailsContainer";
import PromotionalBanner from "@/components/PromotionalBanner/PromotionalBanner";
import ResidentialPropertiesCarousel from "@/components/ResidentialPropertiesCarousel/ResidentialPropertiesCarousel";
import Link from "next/link";
import {
 PropertiesWrapper,
 BannerWrapper,
 NavigatorWrapper,
 NavigatorLink,
 ContentWrapper,
 AmenitiesWrapper,
 AmenityItem,
 AmenityText,
 CommercialWrapper,
 IconWrapper,
 CommercialTextWrapper,
 CommercialText,
 LocationWrapper,
 LocationText,
 LocationBenefitsWrapper,
 BenefitItem,
 BenefitName,
 BenefitTime,
} from './Properties.styles';

const Properties = () => {
 return (
 <PropertiesWrapper>
 <Header activeTab="Properties"/>
 <BannerWrapper>
 <Image
 src={"/assets/images/propertiesBanner.png"}
 alt={"Properties"}
 layout={"responsive"}
 objectFit={"cover"}
 width={1920}
 height={1080}
 loading={"eager"}
 />
 <NavigatorWrapper>
 {PROPERTIES_NAVIGATOR.map((item, index) => {
 return (
 <Link key={index} href={item.link} scroll={false} passHref>
 <NavigatorLink>
 {item.name}
 </NavigatorLink>
 </Link>
 );
 })}
 </NavigatorWrapper>
 </BannerWrapper>

 <CustomHeading heading="How to book a Property with Xtrabrick" />
 <ContentWrapper id={'/properties/#howToBuy'}>
 <Image
 src={"/assets/images/propertiesProcessBanner.png"}
 alt={"Buy Properties Banner"}
 layout={"responsive"}
 objectFit={"cover"}
 width={1920}
 height={1080}
 loading={"eager"}
 />
 </ContentWrapper>
 <CustomHeading heading="Residential Properties" id={'residentialProperties'} />
 <ResidentialPropertiesCarousel />

 <CustomHeading heading="Amenities Provided" />
 <AmenitiesWrapper>
 {AMENITIES_PROVIDED.map((item, index) => {
 return (
 <AmenityItem key={index}>
 <item.icon />
 <AmenityText>{item.name}</AmenityText>
 </AmenityItem>
 );
 })}
 </AmenitiesWrapper>

 <PromotionalBanner data={RESIDENTIAL_PROPERTIES} />

 <CustomHeading heading="Commercial Properties" id={'commercialProperties'} />
 {/* TODO: UPDATE THIS */}
 <VaastuDetailsContainer data={COMMERCIAL_PROPERTIES_WIDGET} />

 <PromotionalBanner data={COMMERCIAL_PROPERTIES} />

 <CustomHeading heading="Developer / Non- Agricultural Plots" id="developerPlots" />
 <VaastuDetailsContainer data={DEVELOPER_PLOTS} />
 

 <PromotionalBanner data={DEVELOPER_PROPERTIES} id={'developerUnits'}/>
 <CustomHeading heading="Location Benefits" id={'locationBenfits'} />
 <LocationWrapper>
 <LocationText>Pune, Maharashtra</LocationText>
 <LocationBenefitsWrapper id={'locationBenefits'}>
 {LOCATION_BENEFITS.map((item, index) => {
 return (
 <BenefitItem key={index}>
 <item.icon />
 <BenefitName>{item.name}</BenefitName>
 <BenefitTime>{item.time}</BenefitTime>
 </BenefitItem>
 );
 })}
 </LocationBenefitsWrapper>
 </LocationWrapper>

 <Footer />
 </PropertiesWrapper>
 );
};

export default Properties;