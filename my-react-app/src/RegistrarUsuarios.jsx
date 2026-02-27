import "./RegistrarUsuarios.css"
function RegistrarUsuarios() {
  return (
    <div>  
        <h1 className="h1">Registrar Usuarios</h1>
        <div className="divForm">
        <RegistroU />
        </div>
        
    </div>
  );

  function RegistroU() {
    return(
        <form className="formularioProductos">
            <label>Nombre:</label>
            <input type="text" name="nombre"></input>
            <label>UserName:</label>
            <input type="text" name="username"></input>
            <label>Email:</label>
            <input type="email" name="email"></input>
            <label>Password:</label> 
            <input type="password" name="password"></input>
            <label>Telefono:</label>
            <input type="tel" name="telefono"></input>
            <label>Ciudad:</label>
            <input type="text" name="ciudad"></input>
            <label>Calle:</label>
            <input type="text" name="calle"></input>
            <label>Numero:</label>
            <input type="number" name="numero"></input>
            <button type="submit" name="registrar">Registrar</button>
        </form>
    )
}
}

export default RegistrarUsuarios;
