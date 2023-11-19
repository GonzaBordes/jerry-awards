import Header from "./Header"
import globos from '../assets/img/globos.png'
import globosCompletos from '../assets/img/globos-completos.png'
import warnerLogo from '../assets/img/warner-logo.png'

const MainContentWrapper = ({children}) => {
    return (
        <>
          <main className="bg-black pt-[1rem] pb-[9rem] relative  min-h-[100dvh] overflow-hidden">
            <img src={globosCompletos} className=" pointer-events-none w-[20rem] absolute right-[-7rem] top-[-12rem]" alt="" />
              <Header />
                {children}         
              <footer className="w-full absolute bottom-0 flex justify-between items-center">
                <img src={globos} className="w-[6rem]" alt="" />
                <img src={warnerLogo} alt="" className="h-[3rem] pr-3"/>
              </footer>
              
            </main>
            
    
        </>
      )
}

export default MainContentWrapper