import TitleWrapper from "../components/wrappers/TitleWrapper";
import CTA from "../components/layout/CTA";
import InfoCard from "../components/cards/InfoCard";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import {
    IconCalendarSearch,
    IconDeviceLaptop,
    IconDatabaseExport,
    IconTestPipe,
    IconUsersPlus,
    IconMedicineSyrup,
    IconStethoscope,
    IconUser
} from '@tabler/icons-react';

export default function About() {
    const features = [
        { icon: <IconCalendarSearch size={32} />, title: "Find and Book Appointments", subtitle: "Search for doctors in your area, and book appointments with just a few clicks." },
        { icon: <IconDeviceLaptop size={32} />, title: "Video Consultations", subtitle: "When you can’t visit in person, connect with doctors via video consultation." },
        { icon: <IconDatabaseExport size={32} />, title: "Medical Document Repository", subtitle: "Store and access your medical records safely online." },
        { icon: <IconTestPipe size={32} />, title: "Lab Reports", subtitle: "Get your lab reports securely stored and accessible whenever you need them." },
        { icon: <IconUsersPlus size={32} />, title: "Secure Referrals", subtitle: "Your doctor can easily refer you to specialists and share medical information securely." },
        { icon: <IconMedicineSyrup size={32} />, title: "Pharmacy Delivery", subtitle: "We partner with pharmacies to have your prescribed medications delivered directly to you." }
    ];

    const doctorBenefits = [
        { bold: "Expand Your Reach", text: "Connect with more patients across your locality and beyond." },
        { bold: "Manage Your Practice", text: "Use FindVaidya’s platform to schedule appointments, store records, and communicate easily with patients." }
    ];

    const patientBenefits = [
        { bold: "Convenience", text: "Find trusted doctors, book appointments, and consult online, all in one place." },
        { bold: "Security", text: "Your personal health data is kept private and secure." },
        { bold: "Access", text: "Whether in a city or village, healthcare is within reach." }
    ];

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

            <SectionWrapper bg="bg-primary-light" title="Our Mission: Accessible Healthcare for All">
                <p>
                    At FindVaidya, we believe everyone deserves quality healthcare, no matter where they live. While cities like Pune and Mumbai have numerous healthcare facilities, rural areas in Maharashtra often lack the same access. We’re here to bridge that gap. Our platform connects patients with trusted doctors, whether they’re in a busy city or a remote village.
                </p>
            </SectionWrapper>

            <SectionWrapper title="A Complete Healthcare Ecosystem">
                <p>
                    We’re building more than just a doctor directory. FindVaidya is creating a comprehensive healthcare ecosystem that’s easy to use, secure, and designed to meet all your medical needs. Here’s how:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <InfoCard key={index} {...feature} />
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper title="Why Choose FindVaidya?">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <InfoCard icon={<IconStethoscope size={32} />} title="For Doctors" listItems={doctorBenefits} />
                    <InfoCard icon={<IconUser size={32} />} title="For Patients" listItems={patientBenefits} />
                </div>
            </SectionWrapper>

            <CTA />
        </main>
    );
}
