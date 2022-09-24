export function Field({txtLabelUsuario, txtNombreInput, type="text"}) {
    return (
        <>
        <label>{txtLabelUsuario}</label>
        <input type={type} name={txtNombreInput}></input>
        </>
    )
}