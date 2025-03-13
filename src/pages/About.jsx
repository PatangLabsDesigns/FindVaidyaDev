import TitleWrapper from "../components/wrappers/TitleWrapper";
import CTA from "../components/layout/CTA";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function About() {
    return (
        <main className="mainWrapper">
            <TitleWrapper
                title="About Us!"
                subTitle={
                    <>
                        FindVaidya is an initiative by <span className="text-primary-base font-bold"> Mrs. Supriya Pande</span>, dedicated to making healthcare accessible by connecting you with trusted doctors.
                    </>
                }
            />
            <CTA />
        </main>
    );
}
