"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Resuables/Footer";
import CustomCursor from "@/components/Resuables/CustomCursor";
import PageLabel from "@/components/Resuables/PageLabel";
import ScrollIndicator from "@/components/Resuables/ScrollIndicator";
import Hero from "@/components/Contact/Hero";
import ContactMap from "@/components/Contact/ContactMap";

const ContactPage = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <ContactMap/>
            <PageLabel text={"Contact-Us"}/>
            <CustomCursor/>
            <ScrollIndicator/>
            <Footer/>
        </>
    );
};

export default ContactPage;