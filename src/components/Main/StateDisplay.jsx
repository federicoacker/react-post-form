
function StateDisplay({stateMessage, loadError, postSuccessCode}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{(loadError || postSuccessCode === -1) ? "Errore!" : "Successo!"}</h5>
        <h6 className="card-subtitle">{(loadError || postSuccessCode === -1) ? "C'è stato un errore:" : "L'upload è andato a buon fine!"}</h6>
        <p>{stateMessage}</p>
      </div> 
    </div>
  )
}

export default StateDisplay