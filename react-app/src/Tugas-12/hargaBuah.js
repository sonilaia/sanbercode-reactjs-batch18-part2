import React from 'react'
import "../App.css"


class Harga extends React.Component{

    constructor(props){
      super(props)
      this.state ={
       daftarBuah : [ 
        {nama: "Semangka", harga: 10000, berat: 1000},
       {nama: "Anggur", harga: 40000, berat: 500},
       {nama: "Strawberry", harga: 30000, berat: 400},
       {nama: "Jeruk", harga: 30000, berat: 1000},
       {nama: "Mangga", harga: 30000, berat: 500} ],
       inputBuah: "",
       inputHarga: "",
       inputBerat: ""      
      }
            
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        var buah = this.state.buah
        var index = this.state.index
        var daftarBuah =this.state.daftarBuah
        var inputBuah = this.state.inputBuah
        var inputHarga = this.state.inputHarga
        var inputBerat = this.state.inputBerat

        if (index === -1){
            let buah = daftarBuah.push({
                nama: inputBuah,
                harga: inputHarga,
                berat: inputBerat
            })
        } else {
            this.state.daftarBuah[index].nama = inputBuah
            this.state.daftarBuah[index].harga = inputHarga
            this.state.daftarBuah[index].berat = inputBerat
        }

        this.setState({
            buah
        })
        
    }

    handleChangeNama = (event) =>{
        var value = event.target.value
        this.setState({
            inputBuah: value,
        })
    }

    handleChangeHarga = (event) =>{
        var value = event.target.value
        this.setState({
            inputHarga: value,
        })
    }

    handleChangeBerat = (event) =>{
        var value = event.target.value
        this.setState({
            inputBerat: value,
        })
    }

    handleEdit = (event) => {
        var index = event.target.value
        this.setState({inputBuah: this.state.daftarBuah[index].nama, index})
        this.setState({inputHarga: this.state.daftarBuah[index].harga, index})
        this.setState({inputBerat: this.state.daftarBuah[index].berat, index})
    }

    handleDelete = (event) =>{
        var index = event.target.value
        this.state.daftarBuah.splice(index, 1)
        this.setState({daftarBuah: this.state.daftarBuah})
    }
  
    render(){
      return(
        <div class="hargaBuah">
          <h1>Daftar Harga Buah</h1>
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
                {
                  this.state.daftarBuah.map((buah, index)=>{
                    return(                    
                      <tr>
                        <td>{buah.nama}</td>
                        <td>{buah.harga}</td>
                        <td>{buah.berat/1000} kg</td>
                        <td>
                           <button value={index} onClick={this.handleEdit}>Edit</button>
                         <button style={{marginLeft: "1em"}} value={index} onClick={this.handleDelete}>Delete</button>
                         </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
        <br />
        <form onSubmit={this.handleSubmit}>
            <label>
                Masukkan data buah:
            </label> <br />          
            <input type="text" required onChange={this.handleChangeNama} value={this.state.inputBuah} /> <br />
            <input type="text" required onChange={this.handleChangeHarga} value={this.state.inputHarga} /> <br />
            <input type="text" required onChange={this.handleChangeBerat} value={this.state.inputBerat} /> <br />
            <input type="submit" value="Submit" />
        </form>
        </div>
      )
    }
  }

  export default Harga