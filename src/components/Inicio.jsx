import React from 'react'
import fraseuno from '../assets/img/imgproductos/fraseuno.png'
import frasedos from '../assets/img/imgproductos/frasedos.png'
import frasetres from '../assets/img/imgproductos/frasetres.png'



const Inicio = () => {
    return (
        <div className='inicio'>
            <h2>SOBRE MI</h2>
            <h4>
                Lucila Tejidos es una web dedicada a la venta de muñecos hechos a crochet llamados amigurumis cada uno de mis productos estan fabricados con hilo de algodon y rellenos de vellon, fabrico productos de coleccion y otros para los mas chiquitos con todo asegurado para su proteccion.
            </h4>

            <hr />

            <div id="carouselExampleDark" className="carousel  carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={fraseuno} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={frasedos} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={frasetres} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h2>PREGUNTAS FRACUENTES</h2>
            <hr />

            <h3>
                <strong>¿Como se lavan los amigurumis?</strong>
            </h3>

            <h4>


                Utilizá agua fria y jabón de baño. El agua calientey el jabón para lavadora harán que tu Amigurumi se decolore y pierda volúmen.

                No utilices blanqueador o secadora. Tu Amigurumi se sentirá mejor si lo secas naturalmente.

                Un Amigurumi limpio y seco ya estara listo para salir contigo a muchos lugares maravillosos.

                Con talcos o tu perfume preferido, un Amigurumi se sentirá mucho mejor.

            </h4>

            <hr />
            <h3>
                <strong>¿Cómo puedo secar un amigurumi?</strong>
            </h3>
            <h4>

                Después de lavar el amigurumi (a mano), presiona suavemente con una toalla para eliminar el exeso de agua y luego dejalo secar al aire libre.

                Evita la exposición directa al sol ya que se come el color y deteriora la textura del amigurumi.

                Tambien te recomiendo que vayas moldeando al amigurumi mientras se seca para que mantenga su forma original.
            </h4>
        </div>
    )
}

export default Inicio