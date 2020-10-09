import React from 'react'
import "../App.css"

export default function Tabel(){
    let dataHargaBuah = [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ]

    return(
    <div class="tabel-buah">
        <h1>Tabel Harga Buah</h1>
        <table>
            <tr>
                <td>Nama</td>
                <td>Harga</td>
                <td>Berat</td>
            </tr>
            {dataHargaBuah.map((buah,index)=>(
                <tr>
                   <td>
                       {buah.nama}
                   </td>
                   <td>
                       {buah.harga}
                   </td>
                   <td>
                       {buah.berat/1000} Kg
                   </td>
                </tr>
            ))}
        </table>
    </div>
    );
}
