'use server'

import { openai } from '@ai-sdk/openai'
import { CoreMessage } from 'ai'
import { streamUI } from 'ai/rsc'
import { z } from 'zod'
import Prices from '../components/prices'

export const continueConversation = async (message: CoreMessage) => {
  'use server'

  try {
    const result = await streamUI({
      model: openai('gpt-4o-mini'),
      messages: [
        {
          role: 'system',
          content: `you write like donald trump would speak. repond if posible as a list`,
        },
        message,
      ],
      text: ({ content }) => content,
      tools: {
        awesomeTool: {
          parameters: z.object({
            prices: z.string().describe('This show a list of prices'),
          }),
          description: 'when a user asks for prifdfces, use this tool',
          generate: async (test) => {
            console.log('test', test)

            return <Prices />
          },
        },
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
