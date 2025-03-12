import TitleWrapper from "../components/TitleWrapper";
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
            <section className="sectionWrapper bg-primary-light">
                <div className="w-full flex flex-col md:flex-row gap-12">
                    <div className="w-1/2">
                        <p className="uppercase text-text-light">Our Mission</p>
                        <h2 className="capitalize font-headings text-3xl md:text-4xl font-bold text-text-heading">Accessible Healthcare for All</h2>
                    </div>
                    <div className="grow">
                        <p>
                            At FindVaidya, we believe everyone deserves quality healthcare, no matter where they live. While cities like Pune and Mumbai have numerous healthcare facilities, rural areas in Maharashtra often lack the same access. We’re here to bridge that gap. Our platform connects patients with trusted doctors, whether they’re in a busy city or a remote village.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}