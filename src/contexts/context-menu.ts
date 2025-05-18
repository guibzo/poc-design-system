import type { MouseEvent as ReactMouseEvent } from 'react'
import { createContext, useContext } from 'react'

type ContextMenuContext = {
  isOpen: boolean
  posX: number
  posY: number
  onContextMenu: (
    e: ReactMouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => void
}

const defaultContext: ContextMenuContext = {
  isOpen: false,
  posX: 0,
  posY: 0,
  onContextMenu: () => {},
}

export const ContextMenuCtx = createContext<ContextMenuContext>(defaultContext)
// provider is at context-menu.tsx

export const useContextMenuCtx = () => {
  const context = useContext(ContextMenuCtx)

  if (!context) {
    throw new Error('useContextMenuCtx must be used within a ContextMenu')
  }

  return context
}
