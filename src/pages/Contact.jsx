import TitleWrapper from "../components/wrappers/TitleWrapper";
import CTA from "../components/layout/CTA";
import { useEffect } from "react";
import { IconMail, IconPhone, IconUser } from "@tabler/icons-react";
import Logo from "../assets/logo-light.png";



export default function Contact() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
    return (
        <main className="mainWrapper">
            <TitleWrapper
                title="Get in Touch, We're Here to Help!"
                subTitle="Have questions or need assistance? Our team is ready to support you every step of the way. Reach out today and let's talk about how we can help."
            />
            <section className="sectionWrapper">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
                    <iframe
                        data-tally-src="https://tally.so/embed/mRkvld?hideTitle=1&transparentBackground=1&dynamicHeight=1"
                        loading="lazy"
                        width="100%"
                        height="805"
                        title="Contact Us"
                    ></iframe>
                    <div className="flex flex-col gap-6 items-start bg-primary-light p-6 h-fit w-full rounded-xl">
                        <img src={Logo} alt="Find Vaidya Logo" className="h-18" />
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row gap-2">
                                <div className="text-primary-base"><IconUser size={24} /></div>Mrs.Supriya Pande
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="text-primary-base"><IconMail size={24} /></div><a href="tel:+919561200200">+91 9561 200 200</a>
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="text-primary-base"><IconPhone size={24} /></div><a href="mailto:contact@findvaidya.com">contact@findvaidya.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    )
}
