'use client'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Provider } from 'react-redux'
import { store } from '@/redux-toolkit/store'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <Toaster />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default Providers
