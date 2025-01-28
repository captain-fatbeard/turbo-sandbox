'use server'

import { openai } from '@ai-sdk/openai'
import { CoreMessage } from 'ai'
import { streamUI } from 'ai/rsc'
import { z } from 'zod'

export const continueConversation = async (message: CoreMessage) => {
  'use server'

  try {
    const result = await streamUI({
      model: openai('gpt-4o-mini'),
      messages: [
        {
          role: 'system',
          content: `You speak danglish.`,
        },
        message,
      ],
      text: ({ content }) => content,
      tools: {
        // awesomeTool: {
        // parameters: z.object({
        //   [serachKey]: z.string().describe('What this promts should display',
        // }),
        // description: 'when a user asks for [serachKey], use this tool',
        // generate: async () => {
        //   return <Component />
        // },
        // },
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
