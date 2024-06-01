import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 text-white bg-opacity-35 font-bold  py-2'>
        <div className='flex items-center bg-orange-600 justify-center h-8 gap-4'>
          <Link to="/" className='hover:text-xl hover:text-neutral-600'>About</Link>
          <Link to="/" className='hover:text-xl hover:text-neutral-600'>Contact</Link>
        </div>
        <p className='text-sm'>Created <span className='text-orange-400'>BY</span> Hatem</p>
    </footer>
  )
}

export default Footer