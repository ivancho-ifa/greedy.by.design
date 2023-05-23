import BottomNavigationLayout from 'components/BottomNavigationLayout'
import { useSession, signIn, signOut } from 'next-auth/react'
import loginStyles from 'styles/Login.module.css'

export default function Login() {
   const { data: session, status } = useSession()

   return (
      <div className={`${loginStyles.Login}`}>
         {!session && (
            <div>
               <div className={loginStyles.notSignedInText}>You are not signed in</div>
               <div>
                  <a
                     href={`/api/auth/signin`}
                     className={loginStyles.button}
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
               {session.user.image && (
                  <div
                     style={{ backgroundImage: `url('${session.user.image}')` }}
                     className={loginStyles.avatar}
                  />
               )}
               <div className={loginStyles.signedInText}>
                  <small>Signed in as</small>
                  <br />
                  <strong>
                     {session.user.email} {`[${session.user.name}]`}
                  </strong>
               </div>
               <a
                  href={`/api/auth/signout`}
                  className={loginStyles.button}
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
