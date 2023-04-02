import Default from './Default'

export default function Paragraph({ value, onChange }) {
   return (
      <Default
         modules={{
            toolbar: [
               [{ color: [] }, { background: [] }],
               ['bold', 'italic', 'underline', 'strike'],
               [{ list: 'ordered' }, { list: 'bullet' }],
               ['link'],
            ],
         }}
         value={value}
         onChange={onChange}
      />
   )
}
