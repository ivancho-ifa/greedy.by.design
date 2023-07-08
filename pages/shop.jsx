import BottomNavigationLayout from 'components/BottomNavigationLayout'
import ComingSoon from 'components/ComingSoon'

export default function Shop() {
   return <ComingSoon />
}

Shop.getLayout = function (page) {
   return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}
