import { revalidatePath } from 'next/cache'
import AddButton from './AddButton'

const todos: string[] = ['Learn React', 'Learn TypeScript', 'Learn Next.js']

export default function Page() {
  async function addTodo(todo: string) {
    'use server'
    // delay 3s to simulate a slow network
    await new Promise(resolve => setTimeout(resolve, 3000))
    todos.push(todo)
    revalidatePath('/form-post-with-transition')
  }

  return (
    <main className='p-5'>
      <h1 className='text-4xl font-bold'>Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <div>
        <AddButton addTodo={addTodo} />
      </div>
    </main>
  )
}
