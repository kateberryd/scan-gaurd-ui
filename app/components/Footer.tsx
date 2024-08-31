import { TwitterLogo, UknownOne, UnknownTwo } from '@/public/svg'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='end-0 h-[100px] flex items-center justify-center'>
         <div className="flex items-center gap-3">
          <TwitterLogo />
          <UknownOne />
          <UnknownTwo />
        </div>
    </div>
  )
}

export default Footer