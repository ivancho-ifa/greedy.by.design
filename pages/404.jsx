import Error from 'next/error'
import BottomNavigationLayout from 'components/BottomNavigationLayout'

export default function NotFound() {
    return Error
}

NotFound.getLayout = function (page) {
    return <BottomNavigationLayout>{page}</BottomNavigationLayout>
}
