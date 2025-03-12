import TitleWrapper from "../components/wrappers/TitleWrapper";
import CTA from "../components/layout/CTA";

export default function Contact() {
    return (
        <main className="mainWrapper">
            <TitleWrapper
                title="Get in Touch, We're Here to Help!"
                subTitle="Have questions or need assistance? Our team is ready to support you every step of the way. Reach out today and let's talk about how we can help."
            />
            <CTA />
        </main>
    )
}
