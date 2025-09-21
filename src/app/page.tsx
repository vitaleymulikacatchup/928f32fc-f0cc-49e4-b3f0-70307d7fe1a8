"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarBase 
          logoSrc="/images/logo.svg" 
          logoAlt="NovaSaaS Logo" 
          leftButtonText="Menu" 
          rightButtonText="Contact" 
          onLeftButtonClick={() => {}} 
          onRightButtonClick={() => {}} 
        />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero 
          title="Welcome to NovaSaaS" 
          subtitle="Your all-in-one solution for efficient SaaS services" 
          contractAddress="0xabc123..." 
          copyButtonText="Copy Address" 
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout 
          title="Get to Know Us" 
          descriptions={["Innovative solutions for every need.", "Dedicated to user satisfaction.", "Riding the wave of technology."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D 
          title="How to Buy Tokens" 
          steps={[
            { title: "Step 1", description: "Create your wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase tokens", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Store safely", image: "/images/placeholder3.avif", position: "right", isCenter: false } 
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics 
          title="Tokenomics Overview" 
          description="Our token model is designed with clarity and efficiency in mind." 
          kpiItems={[
            { value: "100M", description: "Total Supply", longDescription: "Total number of tokens in circulation.", icon: { name: "Users" } },
            { value: "10M", description: "Market Cap", longDescription: "Market capitalization in USD.", icon: { name: "Chart" } }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo 
          logoSrc="/images/logowhite.svg" 
          logoAlt="NovaSaaS Logo" 
          logoText="NovaSaaS" 
          className="footer-class" 
          svgClassName="footer-svg-class" 
        />
      </div>
    </SiteThemeProvider>
  );
}