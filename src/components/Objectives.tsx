import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt, faPalette, faUser, faStar } from "@fortawesome/free-solid-svg-icons";

const Objectives = () => {
    return(        
        <section id="objetivos" className="mt-20 text-center flex flex-col justify-center items-center">
            {/* <a name=""></a> */}

            <h1 className="text-black text-[2.2rem] font-light">Objetivos da Clothing</h1>
            <p className="text-[1.2rem] w-[75%] mt-4 mb-12">A Clothing tem como principal objetivo oferecer uma ampla variedade de roupas de alta qualidade, seguindo as últimas tendências da moda. Busca proporcionar uma experiência de compra online fácil e satisfatória, promovendo a satisfação do cliente por meio de produtos estilosos e duráveis.</p>

            <main className="hidden lg:flex w-[90%] flex-row justify-around">
                <div className="w-[18%]">
                    <FontAwesomeIcon icon={faShirt} className="text-[#6d997e] text-[2.5rem] mb-4" />
                    {/* <i className="fa-solid fa-shirt text-[#6d997e]"></i> */}
                    <h2 className="text-[18px] mb-4 text-center">Entre na moda com Clothing</h2>
                    <p className="text-left text-[18px]">Descubra o seu estilo e entre na moda com a nossa loja virtual, onde a elegância e as últimas tendências se encontram em cada peça.</p>
                </div>  
                <div className="w-[18%]">
                    <FontAwesomeIcon icon={faPalette} className="text-[#6d997e] text-[2.5rem] mb-4" />
                    <h2 className="text-[18px] mb-4 text-center">Novas Artes, novos ares!</h2>
                    <p className="text-left text-[18px]">Na Clothing, buscamos quebrar as fronteiras do ordinário, oferecendo novas artes para respirar novos ares em cada compra.</p>
                </div>  
                <div className="w-[18%]">
                    <FontAwesomeIcon icon={faUser} className="text-[#6d997e] text-[2.5rem] mb-4" />
                    <h2 className="text-[18px] mb-4 text-center">Preocupação total à você</h2>
                    <p className="text-left text-[18px]">Em nossa loja virtual, dedicamos uma preocupação total a você, garantindo uma experiência de compra personalizada.</p>
                </div>    
                <div className="w-[18%]">
                    <FontAwesomeIcon icon={faStar} className="text-[#6d997e] text-[2.5rem] mb-4" />
                    <h2 className="text-[18px] mb-4 text-center">Você como nossa estrela</h2>
                    <p className="text-left text-[18px]">Colocamos você no centro do universo das compras online, onde cada detalhe é pensado para que você brilhe como a estrela principal da sua jornada.</p>
                </div>
            </main>            

            <div className="mt-[1rem] md:mt-12 w-[65vw]"
            style={{borderTop: "solid 2px #6D997E"}}></div>

        </section>
    )
}

export default Objectives;