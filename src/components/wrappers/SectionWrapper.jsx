export default function SectionWrapper({ title, children, bg = "" }) {
    return (
        <section className={`sectionWrapper ${bg}`}>
            <div className="w-full flex flex-col gap-8 max-w-7xl">
                {title && (
                    <div className="w-full">
                        <h2 className="capitalize font-headings text-4xl font-bold text-text-heading">{title}</h2>
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
