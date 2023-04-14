
import NavLink from '@/components/NavLink'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* navlink which are below main nav */}
      <NavLink />

    {/* featured text */}

    <h2 className="hidden md:block text-xl font-bold uppercase text-red-500 ml-8 mt-3">Featured Companies</h2>


     
    </>

)
}
