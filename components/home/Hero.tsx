import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import LandingImage from '@/assets/main.svg'

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          Израда <span className='text-primary'>анализа</span> тестова
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          ТестАнализатор је програм који вам може олакшати израду анализа
          писмених провера. Ако програм нисте користили до сада, прочитајте
          упутство, ако јесте, започните анализу.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/about'>О програму</Link>
        </Button>
      </div>
      <Image
        src={LandingImage}
        alt='landing'
        priority
        className='hidden lg:block '
      />
    </section>
  )
}

export default Hero
