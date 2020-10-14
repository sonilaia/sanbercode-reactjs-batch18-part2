import React, {useState, useEffect} from "react"
import axios from "axios"

const HooksWithAxios = ()=>{ 
  const [pesertaLomba, setPesertaLomba] =  useState(null)
  const [input, setInput] =  useState({name: "", id: null})

  useEffect( () => {
    if (pesertaLomba === null){
      axios.get(`http://backendexample.sanbercloud.com/api/contestants`)
      .then(res => {
        let dataPeserta = res.data
        setPesertaLomba(
          dataPeserta.map(el=> {
            return {id: el.id, name: el.name}
          })
        )      
      })
    }
  },[pesertaLomba])

  const submitForm = (event) =>{
    event.preventDefault()
    
    if ( input.id === null){
      axios.post(`http://backendexample.sanbercloud.com/api/contestants`, { name: input.name})
      .then(res => {
        var data = res.data
        setPesertaLomba([...pesertaLomba, {id: data.id, name: data.name}])
        setInput({id: null, name: ""})
      })

    }else{

      axios.put(`http://backendexample.sanbercloud.com/api/contestants/${input.id}`, { name: input.name})
      .then(res => {
        var dataPeserta = pesertaLomba.map(x => {
          if (x.id === input.id){
            x.name = input.name
          }
          return x
        })
        setPesertaLomba(dataPeserta)
        setInput({id: null, name: ""})
      })
    }
  }

  const handleDelete = (event) =>{
    var idPeserta= parseInt(event.target.value) 
    axios.delete(`http://backendexample.sanbercloud.com/api/contestants/${idPeserta}`)
    .then(res => {
      var dataPeserta = pesertaLomba.filter(x=> x.id !== idPeserta)
      setPesertaLomba(dataPeserta)
    })
  }


  const changeInputName = (event) =>{
    var value= event.target.value
    setInput({...input, name: value})
  }

  const handleEdit = (event) =>{
    var idPeserta= parseInt(event.target.value)
    var peserta = pesertaLomba.find(x=> x.id === idPeserta)

    setInput({id: idPeserta, name: peserta.name})

  }

  return (
    <>
      <div style={{margin: "0 auto", width: "50%"}}>
        <h1 style={{textAlign: 'center'}}>Daftar Peserta Lomba</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            { pesertaLomba !== null && (
                pesertaLomba.map((item, index)=>{
                  return(                    
                    <tr key={item.id}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>
                        <button value={item.id} onClick={handleEdit}>Edit</button>
                        <button style={{marginLeft: "1em"}} value={item.id} onClick={handleDelete}>Delete</button>
                      </td>
                    </tr>
                  )
                })
            )}
          </tbody>
        </table>
        <br/>
        <br/>
        <form style={{textAlign: "center"}} onSubmit={submitForm}>
            <strong style={{marginRight: "10px"}}>Nama</strong>
            <input required type="text" value={input.name} onChange={changeInputName}/>
            <button>Save</button>
        </form>
      </div>
    </>
  )
} 

export default HooksWithAxios
