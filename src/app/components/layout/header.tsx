
import Link from 'next/link'
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const Header = () => {

const links = [
{href: "/", label: "Home"},
{href: "/about", label: "About"},
{href: "/contact", label: "Contact"},
]
links.map

  return (
    <header className='flex justify-between bg-gray-500 text-white mx-auto max-w-screen-2xl py-4 px-4'>
        {/*Logo*/}
        <div>
         <h1 className='text-2xl text-pink-600 font-bold'>H..</h1>
        </div>
        {/*Nav Buttons*/}
        <ul className='hidden md:block'>
            <li className='space-x-5 py-4'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            </li>
        </ul>
        
        
  <Sheet>
  <SheetTrigger  className='md:hidden'>
  <Menu />
  </SheetTrigger>
  <SheetContent>
  <ul>
            <li className='space-x-5 py-4'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            </li>
        </ul>
        
        
  </SheetContent>
  
  
  </Sheet>


    </header>
  )
}

export default Header;