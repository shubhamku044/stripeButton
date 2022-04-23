import type { NextPage } from 'next'
import Button1 from '../components/Button1'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <ul className="space-y-8">
        <li>
          <Button1 tailwindStyle={'bg-blue-400 hover:bg-blue-300'} />
        </li>
        <li>
          <Button1 tailwindStyle={'bg-purple-400 hover:bg-purple-300'} />
        </li>
        <li>
          <Button1 tailwindStyle={'bg-white border text-blue-900'} />
        </li>
      </ul>
    </div>
  )
}

export default Home
