'use client'

import { SearchBar } from '@repo/ui/components'
import { useUIState } from 'ai/rsc'
import { useAiSearch } from '../hooks/ai-search'

export default function Page() {
  const [result] = useUIState()

  return (
    <div className="h-full flex items-center justify-center flex-col">
      <div className="text-center mb-10">
        <SearchBar buttonAction={useAiSearch().search} />
      </div>

      <div className="">
        {result.map((message: any, index: number) => (
          <div key={index} className="text-center">
            {message.display}
          </div>
        ))}
      </div>
    </div>
  )
}
