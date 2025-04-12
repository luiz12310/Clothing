const NavBar = () => {
    return (
        <div className="flex justify-end md:justify-end w-11/12 sans-serif fade-up">
            <ul className="w-90% flex flex-row justify-center">
                <a href="#home">
                    <li className="hidden md:block text-white text-2xl mt-8 p-5">Home</li>
                </a>
                <a href="#objetivos">
                    <li className="hidden md:block text-white text-2xl mt-8 p-5">Objetivos</li>
                </a>
                <a href="#categorias">
                    <li className="hidden md:block text-white text-2xl mt-8 p-5">Categorias</li>
                </a>
                <a href="#contato">
                    <li className="hidden md:block text-white text-2xl mt-8 p-5">Contato</li>
                </a>
            </ul>
        </div>
    )
}

export default NavBar;