import { useContext } from 'react'
import { LiffContext } from '@/providers/liffProvider'

export function useLiff() {
  const context = useContext(LiffContext)
  if (context === undefined) {
    throw new Error('useLiff must be used within a LiffProvider')
  }
  return context
}

