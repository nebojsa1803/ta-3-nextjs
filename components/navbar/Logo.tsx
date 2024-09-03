import Link from 'next/link'
import { Button } from '../ui/button'
import LogoIcon from '@/assets/logoIcon.png'
import Image from 'next/image'

const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <Image src={LogoIcon} alt='logo' priority />
      </Link>
    </Button>
  )
}

export default Logo
