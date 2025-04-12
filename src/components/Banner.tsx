import fundo from '../../public/fundo2.jpg';
import NavBar from './NavBar';

const Banner = () => {
    return(
        <header id="home" className="w-screen h-screen bg-cover bg-no-repeat bg-center font-s font-light"
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${fundo})`}}
>
            <NavBar />
            <div className="absolute top-[40%] left-[25%] md:top-[35%] flex flex-col gap-2 fade-up">
                    <h1 className='text-white text-[4vw] tracking-widest'>Escolha o look 
                        <strong className='text-[#546b5d]'> perfeito</strong>
                        <br />
                        da sua melhor <strong className='text-[#546b5d]'>forma</strong>.
                    </h1>
                    <div className='flex gap-5'>
                        <a href="https://github.com/luiz12310" target="_blanck">
                            <input type="button" value="GitHub" className="hidden md:block w-40 h-10 mr-5 text-white text-1xl rounded-4xl bg-[#6D997E] cursor-pointer hover:bg-[#546b5d] duration-150"  />
                        </a>
                        <a href="#categorias">
                            <input type="button" value="Ver Catálogo" className="hidden md:block w-40 h-10 text-white text-1xl rounded-4xl bg-[#6D997E] cursor-pointer hover:bg-[#546b5d] duration-150" />
                        </a>
                    </div>
                </div>
        </header>
    )
}

export default Banner;