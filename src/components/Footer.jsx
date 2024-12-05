import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between text-zinc-500 border-t border-[#1a1a1a] px-5 py-8 md:flex-row flex-col gap-4 items-center '>
        <p>Built with <a href="https://react.dev/" target='_blank' rel='noreferrer' className="hover:text-zinc-500 text-white transition duration-300">React.js</a> and <a href="https://tailwindcss.com/" target='_blank' rel='noreferrer' className="hover:text-zinc-500 text-white transition duration-300">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" target='_blank' rel='noreferrer' className="hover:text-zinc-500 text-white transition duration-300">Vercel</a>.</p>
        <p>Copyright &copy; Dammysaina 2024</p>
    </div>
  )
}

export default Footer