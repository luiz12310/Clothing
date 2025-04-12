const About = () => {
    return(
        <section className="w-[75%] m-auto mt-[3rem] flex flex-row items-center mb-20">
            <div className="w-[100%] h-[50%] z-1" 
                // data-aos="fade-right"
            >
                <img className="w-[65%] h-[27vw] rounded-4xl" src='../../public/fundo1.jpg' alt="Fundo"/>
            </div>

            <div className="flex items-center text-center md:block bg-white rounded-4xl w-[30%] z-2 h-[18vw] pl-[40px] pr-[40px] absolute"
                style={{margin: "50px 50px 50px 35vw", boxShadow: "rgb(0 0 0 / 20%) 0px 2px 8px"}}
                // data-aos="fade-left"
            >
                <h3 className='text-[2vw] md:mt-[3vw]'>
                    <strong className='text-[#546b5d]'>Estilo</strong> com <strong className='text-[#546b5d]'>Alegria</strong>
                </h3>
                <p className='hidden md:block text-[1.2vw] w-[100%]'>No coração da moda, estamos aqui para transformar seu guarda-roupa em um playground de estilo. Porque se vestir bem é sempre uma celebração!</p>
            </div>
        </section>
    )
}

export default About;