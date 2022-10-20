import { useState, useEffect } from "react";
import { getTopProducts } from "../axios/endPoints";
import Carta from "../components/carta";

function Inicio() {

    const [productosDestacados, setProductosDestacados] = useState([])

    async function traerProductos() {
        const productosAPI = await getTopProducts()
        setProductosDestacados(productosAPI)
    }

    useEffect((e) => {
        traerProductos()

    }, []);

    return (

        <div className="container">
        <div className="row">

            {
                productosDestacados.map((product) => (

                    <div className="col-md-4">
                        <Carta
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            img={product.thumbnail}
                        />
                    </div>

                ))
        }
        </div>
        </div>
    )
}

export default Inicio;