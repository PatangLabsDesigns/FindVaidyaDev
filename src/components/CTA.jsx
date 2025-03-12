import Button from "./Button";

export default function CTA() {
    return (
        <section className="sectionWrapper">
            <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 bg-primary-light rounded-xl p-4 md:px-16 md:py-16'>
                <div className='flex flex-col gap-1 md:items-start'>
                    <h2 className='font-headings text-text-heading font-bold text-2xl md:text-3xl'>Are You a Doctor?</h2>
                    <p className='text-base text-text-body md:text-left'>Join our growing network of trusted healthcare professionals. Register now for <span className='font-bold'>free</span> to be part of FindVaidya and reach patients easily.</p>
                </div>
                <Button to="/register" labelName="List your practice for Free" />
            </div>
        </section>
    )
}