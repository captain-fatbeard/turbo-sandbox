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
          content: 'you speak extremely concisely and only respond with lists, add location and date of sighting',
        },
        message,
      ],
      text: ({ content }) => {
        return content
      },
      tools: {
        getRichUFOsighting: {
          parameters: z.object({
            listOfUFOsighting: z.array(z.string()).describe('A list of UFO sightings'),
          }),
          description: 'When a user asks for UI, use this tool',
          generate: async function* ({ listOfUFOsighting }) {
            return listOfUFOsighting.map((ufo) => <li>{ufo}</li>)
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
