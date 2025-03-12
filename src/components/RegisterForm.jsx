import { useEffect } from "react";

export default function Register() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section className="sectionWrapper">
            <iframe
                data-tally-src="https://tally.so/embed/mVDvxg?&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="805"
                title="Register Your Practice with Us for Free!"
            ></iframe>
        </section>
    );
}
