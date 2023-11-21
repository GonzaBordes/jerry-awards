import MainContentWrapper from "./MainContentWrapper"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import axios from "axios";

const GetWinner = () => {

    const [winner, setWinner] = useState(null)
    const [showSearching, setShowSearching] = useState(true);

    const dataWinner = {
        nombre: "Matías Morsa",
        dni: "12432987",
        table: 4,
        points: 87
    }

    useEffect(() => {
        const timer = setTimeout(() =>{
            setShowSearching(false)

            setTimeout(() => {
                setWinner(dataWinner)
            }, 1000)
        }, 3500)

        return () => clearTimeout(timer)
    }, [])


    const fetchData = async () => {
        try{
            const apiUrl = 'https://us-central1-kickads-airbyte.cloudfunctions.net/get_jerry_winner';

            axios.get(apiUrl)
              .then(response => {
                console.log('Respuesta:', response.data);
              })
              .catch(error => {
                console.error('Error:', error.message);
              });

        } 
        catch(error){
            console.error("Dio un error:", error.message)
        }
    }

    fetchData()

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
                    <div className="h-[60vh] px-2 flex items-center justify-center">
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
                <div className="px-2 pt-[20vw] flex flex-col items-center justify-center">
                    <h4 className="text-yellow text-4xl bold uppercase text-center mb-8">¡Felicitaciones {winner.nombre}!</h4>
                    <p className="text-yellow text-xl medium text-center mb-3">DNI: {winner.dni}</p>
                    <p className="text-yellow text-xl medium text-center mb-3">Mesa: {winner.table}</p>
                    <p className="text-yellow text-xl medium text-center mb-3">Puntos: {winner.points}</p>
                    <span className="block bold bg-yellow rounded-[8px] px-2 py-4 text-black uppercase text-center medium">Ganaste un smart tv philco led 43" full hd</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </MainContentWrapper>
      );
    };
    
    export default GetWinner