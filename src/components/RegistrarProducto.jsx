import { useState } from "react"
import axios from 'axios';


export const RegistrarProducto = () => {
    const[values, setValues] = useState({
        nombre: '',
        precio: 0,
    })


    function handleSubmit(evt) {
        evt.preventDefault();

        console.log('values');
        console.log(values);


        axios.post('https://upa-api-505731ade591.herokuapp.com/api/v1/eduardocastillo',{
            nombre: values.nombre,
            precio: values.precio
        }).then((response) => {
            console.log('Envio exitoso');
            console.log(response);
        }).catch(error => {
            console.log('Error');
            console.log(error);
        })


    }

    function handleChange(evt) {
        console.log('entro a handleChange')
        const { target } = evt;
        const { name, value } = target;

        console.log('name: ' + target.name);
        console.log('value: ' + target.value);

        const newValues = {
            ...values,
            [name]: value,
        }

        console.log('newValues: ' + newValues)

        setValues(newValues);
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input id="nombre" name="nombre" className="form-control"type="text" value={values.nombre} onChange={handleChange} />
            </div>

            <div className="mb-3">
            <label htmlFor="precio" className="form-label">Precio</label>
            <input id="precio" name="precio" type="number" className="form-control" values={values.precio} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
        </>
    )
}


