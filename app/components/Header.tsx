import { Logo, TwitterLogo, UknownOne, UnknownTwo } from '@/public/svg'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-between items-center'>
            <div className="flex items-center gap-5">
                <Logo />
                <div className='border-b border' />
                <div className='flex items-center gap-5'>
                    <Link href="/">
                        <span className='font-medium text-[20px] font-poppins'>Home</span>
                    </Link>

                    <Link href="/">
                        <span className='font-medium text-[20px] font-poppins'>Producers</span>
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <div className='flex items-center gap-3'>
                    <TwitterLogo />
                    <UknownOne />
                    <UnknownTwo />
                </div>

                <div>
                    <button className='bg-black text-white rounded-full px-5 py-2'>Launch App</button>
                </div>
            </div>
        </div>
    )
}
