import Navbar from '@/components/dashboard/Navbar'
import Sidebar from '@/components/dashboard/Sidebar'
import { PropsWithChildren } from 'react'
const layout = ({ children }: PropsWithChildren) => {
  return (
    <main className=' grid -ml-8 lg:grid-cols-5'>
      {/* first-col hide on small screen */}
      <div className='hidden lg:block lg:col-span-1 lg:min-h-screen'>
        <Sidebar />
      </div>
      {/* second-col hide dropdown on big screen */}
      <div className='lg:col-span-4'>
        <Navbar />
        <div className='py-16 px-4 sm:px-8 lg:px-16'>{children}</div>
      </div>
    </main>
  )
}

export default layout
