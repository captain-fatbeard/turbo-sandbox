import { useActions, useUIState } from 'ai/rsc'

export const useAiSearch = () => {
  const { continueConversation } = useActions()
  const [, setConversation] = useUIState()

  return {
    search: async (prompt: string) => {
      const test = await continueConversation({
        content: prompt,
        role: 'user',
      })

      setConversation((prev: any) => [...prev, test])
    },
  }
}
