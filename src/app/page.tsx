import Link from 'next/link'

export default function Home() {
  return (
    <main className='p-5'>
      <div>
        <Link href='/form-post'>Simple Form Post</Link>
      </div>
      <div>
        <Link href='/form-post-with-status'>Form Post With Status</Link>
      </div>
      <div>
        <Link href='/form-post-with-transition'>Form Post With Transition</Link>
      </div>
      <div>
        <Link href='/pokemon-search'>Pokemon Search</Link>
      </div>
    </main>
  )
}
