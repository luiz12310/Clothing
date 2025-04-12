import fundo from '../../public/fundo2.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"; 

const Comments = () =>{
    return(
        <section className="text-white text-center w-screen h-[40vw] mb-20"
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgb(0 0 0 / 50%)), url(${fundo})`, backgroundPosition: "center",
            backgroundSize: "cover", backgroundAttachment: "fixed"
        }}
        >
            <div className="flex flex-col items-center mt-[5vw] mb-[5vw]">
                <h1 className="text-[3vw] mb-[1vw]">Nossos clientes valorizam o que oferecemos.</h1>
            </div>
            <main className="w-[90%] m-auto flex flex-row items-center justify-around">

                <div className="w-[30%] text-left">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-[2.5rem] mb-4" />                    
                    {/* <i className="fa-solid fa-quote-left"></i> */}
                    <p className='text-[1.2vw]'>Adoro a Clothing! Sempre encontro as últimas tendências com qualidade impecável. A facilidade de navegação no site e a entrega rápida me fazem cliente fiel. Recomendo!</p>
                    <br />
                    <p className='text-[1.2vw]'>- Luiz Santos</p>
                </div>  
                <div className="w-[30%] text-left">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-[2.5rem] mb-4" />                    
                    <p className='text-[1.2vw]'>A Clothing é minha escolha principal para moda online. Variedade incrível, site intuitivo, atendimento eficiente e entregas sempre pontuais. Recomendo! #ClienteSatisfeito</p>
                    <br />
                    <p className='text-[1.2vw]'>- Carlos Henrique</p>
                </div>  
                <div className="w-[30%] text-left">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-[2.5rem] mb-4" />                    
                    <p className='text-[1.2vw]'>Top! A Clothing é imbatível em estilo e praticidade. Amo a variedade, o atendimento ágil e as entregas sempre no prazo. Cliente feliz aqui! #ClothingFan #ModaOnline</p>
                    <br />
                    <p className='text-[1.2vw]'>- Pedro Siqueira</p>
                </div>  

            </main>
        </section>
    )
}

export default Comments;