import React from 'react'

export default function Footer() {
  return (
    <>
        <footer>
            <div className='xs:max-md:h-8 h-20 bg-[#0d1b2a] xs:max-sm:px-2 p-8 flex justify-between items-center'>
                <span className='xs:max-sm:text-sm text-xl text-white'>created with ❤️</span>
                <span className='flex xs:max-sm:text-sm text-xl gap-2 text-white'>
                    <a href='https://github.com/kkapil94' target='_blank'>Github</a>
                    <a href='https://twitter.com/_kapil_94' target='_blank'>Twitter</a>
                </span>
            </div>
        </footer>
    </>
  )
}
