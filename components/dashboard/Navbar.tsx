import LinksDropdown from './LinksDropdown'
import { UserButton } from '@clerk/nextjs'
import DarkMode from '@/components/navbar/DarkMode'

const Navbar = () => {
  return (
    <nav className='bg-muted -mr-8 py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between'>
      <div>
        <LinksDropdown />
      </div>
      <div className='flex items-center gap-x-4'>
        <DarkMode />
        <UserButton />
      </div>
    </nav>
  )
}

export default Navbar
