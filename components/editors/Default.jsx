import dynamic from 'next/dynamic'

export default dynamic(import('react-quill'), {
   ssr: false,
})
