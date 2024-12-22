'use server'

import { openai } from '@ai-sdk/openai'
import { CoreMessage } from 'ai'
import { streamUI } from 'ai/rsc'

export const continueConversation = async (message: CoreMessage) => {
  'use server'

  try {
    const result = await streamUI({
      model: openai('gpt-4o-mini'),
      messages: [message],
      text: ({ content }) => {
        return content
      },
    })

    return {
      display: result.value,
      role: 'assistant',
    }
  } catch (error: any) {
    const errorMessage = error?.message || 'An unexpected error occurred. Please try again.'

    return { display: errorMessage, role: 'assistant' }
  }
}
