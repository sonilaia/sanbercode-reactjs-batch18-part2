// import React, {useEffect, useState} from 'react'
// import axios from "axios"

// const HooksAxios = () =>{
//     const [daftarBuah, setDaftarBuah] = useState(null)
//     const[input, setInput] = useState({name: "", price: "", weight: "", id: null})

//     useEffect ( () => {
//         if (daftarBuah === null){
//             axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
//             .then(res => {
//                 let dataBuah = res.data
//                 setDaftarBuah(
//                     dataBuah.map(el => {
//                         return {id: el.id, name: el.name, price: el.price, weight: el.weight}
//                     })
//                 )
//             })
//         }
//     }, [daftarBuah])

//     const submitForm = (event) =>{
//         event.preventDefault()

//         if (input.id === null){
//             axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: input.name, price: input.price, weight: input.weight})
//             .then(res=> {
//                 var data = res.data
//                 setDaftarBuah([...daftarBuah, {id: data.id, name: data.name, price: data.price, weight: data.weight}])
//                 setInput({id: null, name: "", price: "", weight: ""})
//             })
//         } else {
//             axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {name: input.name}, {price: input.price}, {weight: input.weight})
//             .then(res=> {
//                 var dataBuah = daftarBuah.map(x => {
//                     if (x.id === input.id){
//                         x.name = input.name,
//                         x.price = input.price,
//                         x.weight = input.weight    
//                     }
//                     return x
//                 })
//             setDaftarBuah(dataBuah)
//             setInput({id: null, name: "", price: "", weight: ""})             
//         })
//         }
//     }

//     const handleDelete = (event) =>{
//         var idBuah= parseInt(event.target.value)
//         axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
//         .then(res => {
//             var dataBuah = daftarBuah.filter(x=> x.id !== idBuah)
//             setDaftarBuah(dataBuah)
//         })
//     }

//     const changeInputName = (event) => {
//         var value= event.target.value
//         setInput({...input, name: value})
//     }

//     return (
//         <>
//             <div style={{margin: "0 auto", width: "50%"}}>
//                 <h1 style={{textAlign: 'center'}}>Daftar Harga Buah</h1>
//                 <table>
//                     <thead>
//                     <tr>
//                         <th>No</th>
//                         <th>Nama</th>
//                         <th>Harga</th>
//                         <th>Berat</th>
//                         <th>Aksi</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     { daftarBuah !== null && (
//                         daftarBuah.map((item, index)=>{
//                             return(                    
//                             <tr key={item.id}>
//                                 <td>{index+1}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.name}</td>
//                                 <td>
//                                 <button value={item.id} onClick={handleEdit}>Edit</button>
//                                 <button style={{marginLeft: "1em"}} value={item.id} onClick={handleDelete}>Delete</button>
//                                 </td>
//                             </tr>
//                             )
//                         })
//                     )}
//                     </tbody>
//                 </table>
//                 <br/>
//                 <br/>
//                 <form style={{textAlign: "center"}} onSubmit={submitForm}>
//                     <strong style={{marginRight: "10px"}}>Nama</strong>
//                     <input required type="text" value={input.name} onChange={changeInputName}/>
//                     <button>Save</button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default HooksAxios
