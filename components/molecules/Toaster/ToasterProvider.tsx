'use client'

import type { ReactNode } from 'react'
import { createContext } from 'react'
import type { Toast } from 'react-hot-toast'

export type ToasterState = 'success' | 'error' | 'warning' | 'neutral'

export interface ToasterContext {
  t: Toast | null
  state: ToasterState
}

export interface ToasterProviderProps extends ToasterContext {
  children: ReactNode
}

export const ToasterContext = createContext<ToasterContext>({
  state: 'success',
  t: null,
})

export function ToasterProvider({ children, state, t }: ToasterProviderProps) {
  return (
    <ToasterContext.Provider
      value={{
        state,
        t,
      }}>
      {children}
    </ToasterContext.Provider>
  )
}
