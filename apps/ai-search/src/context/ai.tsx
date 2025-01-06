'use server'

import { createAI } from 'ai/rsc'
import { continueConversation } from '../actions/continueConversation'

export const Ai = createAI({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
})
