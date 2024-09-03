import Navbar from '@/components/navbar/Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <section>
        <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
          Брзо и лако до
          <span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-white'>
            анализе
          </span>
        </h1>
        <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
          ТестАнализатор је апликација написана са циљем да се брзо и лако
          обраде подаци везани за постигнућа ученика на писаним проверама. За
          писање програма су коришћени програмски језици и библиотеке наведене
          испод.
        </p>
      </section>
    </>
  )
}

export default About
