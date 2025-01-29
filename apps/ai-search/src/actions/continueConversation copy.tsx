'use server'

import { openai } from '@ai-sdk/openai'
import { CoreMessage } from 'ai'
import { streamUI } from 'ai/rsc'
import { z } from 'zod'
import React from 'react'
import Prices from '../components/prices'

export const continueConversation = async (message: CoreMessage) => {
  'use server'

  try {
    const result = await streamUI({
      model: openai('gpt-4o-mini'),
      messages: [
        {
          role: 'system',
          content: `You write like Donald Trump would speech.`,
        },
        message,
      ],
      text: ({ content }) => content,
      tools: {
        getPricesCompoenent: {
          parameters: z.object({
            prices: z.string().describe('The prices component to display.'),
          }),
          description: 'when a user asks for prices, use this tool',
          generate: async () => {
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
