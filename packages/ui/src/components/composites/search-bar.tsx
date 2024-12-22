'use client'

import { Button } from '../ui/button.js'
import { Input } from '../ui/input.js'
import { useFormStatus } from 'react-dom'

type Props = {
  buttonAction?: (query: string) => void
}

const FormFields = () => {
  const { pending } = useFormStatus()

  return (
    <>
      <Input placeholder={'Search...'} name="query" disabled={pending} />
      <Button type="submit" disabled={pending}>
        {pending ? 'Pending...' : 'Search'}
      </Button>
    </>
  )
}

export const SearchBar = ({ buttonAction }: Props) => {
  function search(formData: FormData): void {
    const query = formData.get('query') as string

    if (buttonAction) {
      buttonAction(query)
    }
  }

  return (
    <form action={search} className="flex space-x-2">
      <FormFields />
    </form>
  )
}
