import Default from './Default'

export default function Paragraph({ value, onChange }) {
   return (
      <Default
         modules={{
            toolbar: [
               [{ font: [] }],
               [{ color: [] }, { background: [] }],
               ['bold', 'italic', 'underline', 'strike'],
               [{ list: 'ordered' }, { list: 'bullet' }],
               [{ align: [] }],
               ['link'],
            ],
         }}
         value={value}
         onChange={onChange}
      />
   )
}
