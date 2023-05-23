import { useSession } from 'next-auth/react'

const admins = JSON.parse(process.env.NEXT_PUBLIC_ADMINS)

export function isAdmin(session) {
   return session && admins.includes(session.user.email)
}

// eslint-disable-next-line react/display-name
export const withSession = (Component) => (props) => {
   const session = useSession()

   return (
      <Component
         session={session}
         {...props}
      />
   )
}
