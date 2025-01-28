'use client'

import { SearchBar } from '@repo/ui/components'
import { useUIState } from 'ai/rsc'
import { useAiSearch } from '../hooks/ai-search'

export default function Page() {
  const [result] = useUIState()

  return (
    <div className="h-full flex items-center flex-col ">
      <div className="text-center mb-10 w-full max-w-md my-6">
        <SearchBar buttonAction={useAiSearch().search} />
      </div>
      <div className="w-full max-w-xl">
        {result.map((message: any, index: number) => (
          <div key={index} className="break-words	mb-6">
            {message.display}
          </div>
        ))}
      </div>
    </div>
  )
}
