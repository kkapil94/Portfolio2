import React from 'react'

export default function Footer() {
  return (
    <>
        <footer>
            <div className='h-20 bg-[#0d1b2a] p-8 flex justify-between items-center'>
                <span className='text-xl text-white'>created with ❤️</span>
                <span className='flex text-xl gap-2 text-white'>
                    <a href='https://github.com/kkapil94' target='_blank'>Github</a>
                    <a href='https://twitter.com/_kapil_94' target='_blank'>Twitter</a>
                </span>
            </div>
        </footer>
    </>
  )
}
