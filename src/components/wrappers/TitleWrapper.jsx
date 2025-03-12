import Button from "../common/Button";
export default function TitleWrapper({ title, subTitle, to, label }) {
    return (
        <section className="sectionWrapper">
            <div className="flex flex-col items-left md:items-center md:text-center gap-8">
                <h1 className="font-headings text-text-heading font-bold text-5xl md:text-7xl">
                    {title}
                </h1>
                <p className="text-lg font-base text-text-body">
                    {subTitle}
                </p>
                {to ? <div><Button to={to} labelName={label} /> </div> : null}
            </div>
        </section>
    );
}
