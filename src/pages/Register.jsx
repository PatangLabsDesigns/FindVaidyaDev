import TitleWrapper from "../components/wrappers/TitleWrapper";
import RegisterForm from "../components/RegisterForm";
import CTA from "../components/layout/CTA";

export default function Register() {
    return (
        <main className="mainWrapper">
            <TitleWrapper
                title={
                    <>
                        List your practice with us,
                        <span className="hidden md:inline">
                            < br />
                        </span >
                        for <span className="text-primary-base">Free</span>!
                    </>
                }
                subTitle="Join our trusted network of healthcare providers. Get discovered by patients looking for expert care in their area—completely free.."
            />
            <RegisterForm />
            <CTA />
        </main >
    );
}
