export default function Footer() {
  return (
    <footer>
      <div className='w-full px-4 py-2 md:px-8 md:py-4 flex flex-col md:flex-row gap-2 justify-between items-center bg-background border-t border-outline text-sm text-text-light'>
        <p className='text-center'>© {(new Date().getFullYear())} FindVaidya. All rights reserved.</p>
        <nav className='flex items-center gap-4'>
          <a href="/terms" className='hover:text-primary-dark hover:font-bold'>Terms of Use</a>
          <a href="/privacy" className='hover:text-primary-dark hover:font-bold'>Privacy Policy</a>
        </nav>
        <p className='text-center'>Made with ✨ by <a href="https://www.patanglabs.design" target="_blank" rel="noopener noreferrer" className='font-bold underline'>Patang Labs</a></p>
      </div>
    </footer>
  )
}