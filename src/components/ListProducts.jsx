import axios from 'axios';
import { useEffect, useState } from "react";
import { RegistrarProducto } from './RegistrarProducto';


export const ListProducts = () => {

    console.log('Inicia componente');

    const[data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios.get('https://upa-api-505731ade591.herokuapp.com/api/v1/eduardocastillo ')
        .then((response) => {
            console.log('Respuesta OK');
            console.log('Response: ' + response.data);
            setData(response.data);
        }).catch((error) => {
            console.log('Error ', error );
        })
    }

    return (
        <>
        <RegistrarProducto />
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((prod, key) => (
                        <tr key={key}>
                            <td>{prod.nombre}</td>
                            <td>{prod.precio}</td>

                        </tr>
                    ))
                }
            </tbody>
        </table>

        
        </>
    )


}