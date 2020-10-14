import React, { useEffect, useState } from 'react'
import axios from "axios"


const HooksWithAxios = () =>{
    // Supaya Datanya bersih
    const [daftarBuah, setDaftarBuah] = useState(null) 
    const [inputName, setInputName] = useState({name: "", id: null})
    const [inputPrice, setInputPrice] = useState({price: "", id: null})
    const [inputWeight, setInputWeight] = useState({weight: "", id: null})

    useEffect( () => {
        // ngambil data API
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
          // lakukan pengolahan data
          let dataBuah = res.data

          setDaftarBuah(dataBuah.map(el=> { 
            // membalikkan data dengan berupa objek   
              return {id: el.id, name: el.name, price: el.price, weight: el.price}
            })
            )
        })
      }, [])

      const handleDelete = (event) =>{
            var idBuah= parseInt(event.target.value) 
            axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
            .then(res => {
              var dataBuah = daftarBuah.filter(x=> x.id !== idBuah)
              setDaftarBuah(dataBuah)
              console.log(dataBuah)
            })
            
          }

          const handleEdit = (event) =>{
              var idBuah = parseInt(event.target.value)
              axios.edit(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
              .then(res => {
                  var dataBuah = daftarBuah.filter(x=>x.id === idBuah)

                  setInputName({id: idBuah, name: dataBuah[0].name})
                  setInputPrice({id: idBuah, price: dataBuah[0].price})
                  setInputWeight({id: idBuah, weight: dataBuah[0].weight})
              })
          }

    return(
        <>
        
        <div style={{margin: "0 auto", width: "50%"}}>
        <h1 style={{textAlign: 'center'}}>Daftar Harga Buah</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {
            daftarBuah !== null && (
                daftarBuah.map((item, index)=>{
                    return(                    
                        <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.weight/1000} kg</td>
                        <td>
                            <button  value={item.id} onClick={handleEdit}>Edit</button>
                            &nbsp;
                            <button  value={item.id} onClick={handleDelete}>Delete</button>
                        </td>
                        </tr>
                    )
                })
            )
            }
            </tbody>
            </table>
            <div style={{width: "50%", margin: "0 auto", display: "block"}}>
          <div style={{border: "1px solid #aaa", padding: "20px"}}>
            <form>
              <label style={{float: "left"}}>
                Nama:
              </label>
              <input style={{float: "right"}} type="text" required name="name"/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Harga:
              </label>
              <input style={{float: "right"}} type="text" required name="harga"/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Berat (dalam gram):
              </label>
              <input style={{float: "right"}} type="number" required name="berat"/>
              <br/>
              <br/>
              <div style={{width: "100%", paddingBottom: "20px"}}>
                <button style={{ float: "right"}}>submit</button>
              </div>
            </form>
          </div>
        </div>
        </div>
        </>
    )
}

export default HooksWithAxios