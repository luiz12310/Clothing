const Contact = () =>{
    return(
        <section id="contato" className="w-[100%] text-center flex flex-col justify-center items-center mb-20">

        <h1 className="text-black text-[4vw] font-light font-s"
        style={{letterSpacing: '1px', wordSpacing: "3px"}}
        >Entre em contato</h1>

        <div className="mt-8 rounded-xl flex flex-row"
        style={{boxShadow: "rgb(0 0 0 / 15%) 0px 2px 8px"}}
        >
            <main>
                <form className="p-[20px]" action="https://formsubmit.co/luizhenriquesantosmoraes1@gmail.com" method="POST">
                    
                    <input placeholder="Nome" name="txtNome" id="txtNome" className="w-[30vw] p-[10px] focus:outline-none h-8 mb-8"
                        style={{borderLeft: "none", borderTop: "none", borderRight: "none", borderBottom: "2px solid #546b5d"}}
                        required
                    />
                    <br />

                    <input placeholder="Email" name="txtEmail" id="txtEmail" className="w-[30vw] p-[10px] focus:outline-none h-8 mb-8" 
                    style={{borderLeft: "none", borderTop: "none", borderRight: "none", borderBottom: "2px solid #546b5d"}}
                    required/>
                    <br />

                    <textarea placeholder="Mensagem" name="txtArea" id="txtArea" className="w-[30vw] p-[10px] rounded-xl min-h-[6vw] focus:outline-none resize-none" required 
                    style={{border: "1px solid #546b5d"}}
                    />
                    <br />

                    <button id="btnForm" type="submit" className="w-[10rem] h-[5vh] mr-[20px] bg-[#6D997E] text-[16px] text-white cursor-pointer hover:bg-[#546b5d] border-[#546b5d] mt-4 duration-150"
                        style={{border: "2px solid #6D997E", borderRadius: "200px"}}
                    >Enviar</button>
                
                </form>
            </main>
            <aside className="bg-[#546b5d] p-[30px] rounded-xl min-h-[20rem]">
            </aside>
        </div>
    </section>
    )
}

export default Contact;