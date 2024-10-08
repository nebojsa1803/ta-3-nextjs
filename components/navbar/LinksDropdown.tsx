import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { LuAlignLeft } from 'react-icons/lu'
import Link from 'next/link'
import { Button } from '../ui/button'
import UserIcon from './UserIcon'
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import SignOutLink from './SignOutLink'

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-[100px]'>
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
        <SignedOut>
          <DropdownMenuItem>
            {/* forceRedirectedUrl added - after loggig go to dashboard */}
            <SignInButton
              mode='modal'
              forceRedirectUrl='/new-analysis/general-data-form'
            >
              <button className='w-full text-left'>Улогуј се</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left'>Региструј се</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          <SignOutLink />
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default LinksDropdown
