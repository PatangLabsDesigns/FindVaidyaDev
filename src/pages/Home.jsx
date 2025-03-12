import TitleWrapper from "../components/TitleWrapper";
import CTA from "../components/CTA";

export default function Home() {
    return (
        <main className="mainWrapper">
            <TitleWrapper
                title={
                    <>
                        Find Trusted Doctors Near You,
                        <span className="hidden md:inline">
                            <br />
                        </span>
                        Launching Soon!
                    </>
                }
                subTitle="Your health matters. FindVaidya is here to connect you with verified trusted doctors based on your needs effortlessly."
            />
            <CTA />
        </main>
    );
}
