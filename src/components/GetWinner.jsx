import MainContentWrapper from "./MainContentWrapper"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from 'framer-motion'

const GetWinner = () => {

    const [winner, setWinner] = useState(null)
    const [showSearching, setShowSearching] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() =>{
            setShowSearching(false)

            setTimeout(() => {
                setWinner('Matías Morsa')
            }, 1000)
        }, 3500)

        return () => clearTimeout(timer)
    }, [])


    /*const fetchData = async () => {
        try{
            const response = await fetch('https://us-central1-kickads-airbyte.cloudfunctions.net/get_winner')

            if (!response.ok){
                throw new Error("Error al traer el ganador");
            }

            const data = await response.json();
            console.log(data)
        } 
        catch(error){
            console.error("Dio un error:", error.message)
        }
    }

    fetchData()*/

    return (
        <MainContentWrapper>
          <AnimatePresence>
            {showSearching && (
                <motion.div
                    key="searching"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="px-5"
                >
                    <div className="h-[70vh] px-2 flex items-center justify-center">
                        <h3 className="text-yellow semibold text-3xl text-center mb-3">Buscando Ganador...</h3>
                    </div>
                </motion.div>
            )}
            {winner && (
              <motion.div
                key="winner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="px-2 h-[70vh] flex flex-col items-center justify-center">
                    <h4 className="text-yellow text-4xl bold uppercase text-center mb-8">¡Felicitaciones {winner}!</h4>
                    <span className="block bg-yellow rounded-[8px] px-2 py-4 text-black uppercase text-center mb-8 medium">Ganaste un smart tv philco led 43" full hd</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </MainContentWrapper>
      );
    };
    
    export default GetWinner