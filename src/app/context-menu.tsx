'use client'

import { ContextMenuCtx, useContextMenuCtx } from '@/contexts/context-menu'
import { useContextMenu } from '@/hooks/use-context-menu'
import { type PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

const ContextMenuTrigger = ({ children }: PropsWithChildren) => {
  const { onContextMenu } = useContextMenuCtx()

  return (
    <div
      onContextMenu={onContextMenu}
      className='border-muted-foreground hover:brightness-80 flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed transition-all hover:cursor-pointer'
    >
      {children}
    </div>
  )
}

const ContextMenuContent = ({ children }: PropsWithChildren) => {
  const { posX, posY, isOpen } = useContextMenuCtx()

  if (isOpen) {
    return createPortal(
      <div
        style={{ left: posX, top: posY }}
        // could add fade-in/fade-out animation by manipulating data-state attribute, but too lazy rn
        data-context={true}
        className='border-muted-foreground absolute z-50 min-h-40 w-60 overflow-y-auto overflow-x-hidden rounded-md border bg-zinc-800 p-4 transition-all'
      >
        {children}
      </div>,
      document.body,
    )
  }
}

const ContextMenuItem = ({ children }: PropsWithChildren) => {
  return (
    <button className='border-muted-foreground w-full rounded-md border bg-zinc-950 px-2 py-1.5 text-sm transition-all hover:brightness-90'>
      {children}
    </button>
  )
}

const ContextMenu = ({ children }: PropsWithChildren) => {
  const { isOpen, posX, posY, onContextMenu } = useContextMenu()

  return (
    <ContextMenuCtx.Provider value={{ isOpen, posX, posY, onContextMenu }}>
      {children}
    </ContextMenuCtx.Provider>
  )
}

export { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger }
