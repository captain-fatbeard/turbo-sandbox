'use client'

import { Button } from '../ui/button.js'
import { Input } from '../ui/input.js'

type Props = {
  inputPlaceholder: string
  buttonText: string
  buttonAction?: (query: string) => void
}

export const SearchBar = ({ inputPlaceholder, buttonText, buttonAction }: Props) => {
  function search(formData: FormData): void {
    const query = formData.get('query') as string

    if (buttonAction) {
      buttonAction(query)
    }
  }

  return (
    <form action={search} className="flex space-x-2">
      <Input placeholder={inputPlaceholder} name="query" />
      <Button type="submit">{buttonText}</Button>
    </form>
  )
}
