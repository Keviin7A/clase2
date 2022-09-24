import { Button } from "./Button";
import { Field } from "./Field";
import "./Formulario.css"

export function Formulario() {
    return(
        <form className="form">
            <Field txtLabelUsuario="Usuario" txtNombreInput = "txtNombre"/>
            <Field txtLabelUsuario="Clave" txtNombreInput = "txtClave" type ="password"/>
            <Button value="Enviar"/>
            <Button value="Cancelar"/>
        </form>
    )
}