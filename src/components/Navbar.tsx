import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = () => {
  return (
    <nav className=" flexBetween sticky h-14 inset-x-0 w-full backdrop-blur-lag
    max-container padding-container z-30 py-5">
        <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-zinc-200'>
        <Link href="/">
            <Image src="/hilink-logo.svg" width={74} height={29} alt={'logo'}/>
        </Link>
            
        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href}  key={link.key}
                className='regular-16 text-black flexCenter
                cursor-pointer pb-1.5 transition-all hover:font-bold'>
                    {link.label}
                </Link>
            ))}
        </ul>
        
        <Image
            src="menu.svg"
            alt='menu'
            width={32}
            height={32}
            className='inline-block cursor-pointer lg:hidden'
        />
        </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar