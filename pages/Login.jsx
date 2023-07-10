import BottomNavigationLayout from 'components/BottomNavigationLayout'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Login() {
   const { data: session, status } = useSession()

   return (
      <div className='grid h-full place-items-center bg-[black] text-center font-sans text-[white]'>
         {!session && (
            <div>
               <div>You are not signed in</div>
               <div>
                  <a
                     href={`/api/auth/signin`}
                     className='m-[1em] block border border-solid border-[red] px-[1.5em] py-[1em] text-[red]'
                     onClick={(e) => {
                        e.preventDefault()
                        signIn()
                     }}
                  >
                     Sign in
                  </a>
               </div>
            </div>
         )}
         {session?.user && (
            <div>
               {session.user.image && <div style={{ backgroundImage: `url('${session.user.image}')` }} />}
               <div>
                  <small>Signed in as</small>
                  <br />
                  <strong>
                     {session.user.email} {`[${session.user.name}]`}
                  </strong>
               </div>
               <a
                  href={`/api/auth/signout`}
                  className='m-[1em] block border border-solid border-[red] px-[1.5em] py-[1em] text-[red]'
                  onClick={(e) => {
                     e.preventDefault()
                     signOut()
                  }}
               >
                  Sign out
               </a>
            </div>
         )}
      </div>
   )
}

Login.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}
