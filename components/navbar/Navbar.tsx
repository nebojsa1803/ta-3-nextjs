import Container from '../global/Container'
import DarkMode from './DarkMode'
import LinksDropdown from './LinksDropdown'

import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='border-b mb-20'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8'>
        <Logo />
        <div className='flex gap-4 items-center'>
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
