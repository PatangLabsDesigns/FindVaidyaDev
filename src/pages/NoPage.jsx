import CTA from "../components/CTA"
import Button from "../components/Button"

export default function NoPage(){
    return(
        <main className='w-full px-4 py-16 md:px-16 md:py-32 flex flex-col gap-16 items-center justify-center bg-background text-text-base'> 
        <div className='flex flex-col items-center gap-6'>
          <h1 className='font-headings text-text-heading font-bold text-5xl md:text-7xl text-center'>404: Page Not Found</h1>
        </div>
         <Button to="/" labelName="Go to Home" />
      </main>
    )
}