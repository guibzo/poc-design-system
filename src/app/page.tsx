import type { Metadata } from 'next'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from './context-menu'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center space-y-10 p-5'>
      <h1 className='text-3xl font-bold'>Hello world!</h1>

      <ContextMenu>
        <ContextMenuTrigger>Right click me</ContextMenuTrigger>

        <ContextMenuContent>
          <ContextMenuItem>Item 1</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
