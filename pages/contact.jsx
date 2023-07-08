import BottomNavigationLayout from 'components/BottomNavigationLayout'

export default function Contact() {
   return (
      <div className='grid h-full grid-cols-[1fr] grid-rows-[1fr_auto] justify-center justify-items-center bg-[black] font-sans text-[white]'>
         <main className='grid content-center gap-[1em]'>
            <form
               action='mailto:greedybydesign@gmail.com'
               method='get'
               enctype='text/plain'
               className='grid grid-cols-[1fr] grid-rows-[auto_auto_1fr_auto] gap-[1em] md:grid-cols-[1fr_1fr] md:grid-rows-[auto_1fr_auto]'
            >
               <input
                  type='text'
                  placeholder='John Doe'
                  className='min-w-0 bg-[white] px-[0.5em] py-[0.25em] text-[black] placeholder:italic placeholder:text-[gray]'
               />
               <input
                  type='email'
                  placeholder='john.doe@mail.com'
                  className='min-w-0 bg-[white] px-[0.5em] py-[0.25em] text-[black] placeholder:italic placeholder:text-[gray]'
               />
               <textarea className='h-[12em] min-w-0 bg-[white] px-[0.5em] py-[0.25em] text-[black] md:col-span-2'></textarea>
               <input
                  type='submit'
                  value='Send'
                  className='w-full min-w-0 justify-self-center bg-[white] px-[0.5em] py-[0.25em] text-center uppercase text-[black] placeholder:italic placeholder:text-[gray] md:col-span-2 md:max-w-[10em]'
               />
            </form>
            <div className='text-center uppercase'>
               <span className='text-[x-small]'>or message us on </span>
               <span className='block text-[large]'>
                  <a href='mailto:greedybydesign@gmail.com'>greedybydesign@gmail.com</a>
               </span>
            </div>
         </main>
         <footer className='relative m-[0.5em] w-fit text-center text-[x-small] uppercase after:absolute after:left-1/4 after:top-[-0.5em] after:h-px after:w-6/12 after:bg-gray after:content-[""]'>
            greedy.by.design <span className='block text-[xx-small]'>@2022</span>
         </footer>
      </div>
   )
}

Contact.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}
