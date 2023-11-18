import logoChico from '../assets/img/logo-chico.png'

const Header = () => {
  return (
    <header className='flex gap-2 items-center justify-center relative z-50 mb-4'>
        <h1 className="text-yellow bold text-[2rem] mb-1">JERRY'S</h1>
        <img src={logoChico} className='w-[3rem]' alt="" />
    </header>
  )
}

export default Header