'use client'

import { useRef, useTransition } from 'react'

type Props = { addTodo: (todo: string) => Promise<void> }

export default function AddButton({ addTodo }: Props) {

  const inputRef = useRef<HTMLInputElement>(null)
  const [isPending, startTransition] = useTransition()

  return (
    <div>
      <input
        ref={inputRef}
        type='text'
        name='todo'
        className='border border-gray-300 rounded-lg py-4 px-4 text-base font-normal text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
      />
      <button
        disabled={isPending}
        onClick={async () => startTransition(async () => await addTodo(inputRef.current?.value || ''))}
        type='submit'
        className='m-2 bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10'>
        Add
      </button>
    </div>
  )
}
