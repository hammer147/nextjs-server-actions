import { revalidatePath } from 'next/cache'

const todos: string[] = ['Learn React', 'Learn TypeScript', 'Learn Next.js']

export default function Page() {

  async function addTodo(formData: FormData) {
    'use server'
    const todo = formData.get('todo')
    if (typeof todo === 'string') {
      todos.push(todo)
      revalidatePath('/form-post')
    }
  }

  return (
    <main className='p-5'>
      <h1 className='text-4xl font-bold'>Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action={addTodo}>
        <input
          type='text'
          name='todo'
          className='border border-gray-300 rounded-lg py-4 px-4 text-base font-normal text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
        />
        <button
          type='submit'
          className='m-2 bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10'>
          Add
        </button>
      </form>
    </main>
  )
}
