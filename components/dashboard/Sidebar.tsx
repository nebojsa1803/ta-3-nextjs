'use client'
import Logo from '@/assets/logo.svg'
import links from '@/utils/dashboardLinks'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className='py-4 px-4 bg-muted h-full'>
      <Image src={Logo} alt='logo' priority className='mx-auto' />
      <div className='flex flex-col mt-20 gap-y-4'>
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathname === link.href ? 'default' : 'link'}
            >
              <Link
                href={link.href}
                className='flex justify-stretch items-center gap-x-2'
              >
                <span className='w-6 h-6'>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </Button>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
