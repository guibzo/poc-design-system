import type { MouseEvent as ReactMouseEvent } from 'react'
import { useCallback, useEffect, useState } from 'react'

export const useContextMenu = () => {
  const [status, setStatus] = useState({
    posX: 0,
    posY: 0,
    state: 'closed',
  })

  const resetState = useCallback(() => {
    setStatus({
      posX: 0,
      posY: 0,
      state: 'closed',
    })
  }, [])

  const onContextMenu = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()

    const posX = e.clientX
    const posY = e.clientY

    setStatus({
      posX,
      posY,
      state: 'open',
    })
  }

  const isOpen = status.state === 'open'

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (!target.dataset.context) {
        resetState()
      }
    }

    document.body.addEventListener('click', handleClick)
    return () => document.body.removeEventListener('click', handleClick)
  }, [resetState])

  return {
    isOpen,
    onContextMenu,
    posX: status.posX,
    posY: status.posY,
  }
}
