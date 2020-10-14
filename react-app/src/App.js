import React from 'react';
import './App.css';
import Buah from './Tugas-9/Buah';
import Tabel from './Tugas-10/tabelBuah'
import Timer from './Tugas-11/Timer'
import DaftarBuah from "./Tugas-12/hargaBuah"
import HooksWithAxios from "./Tugas-13/HooksAxios"

function App() {
	return (
		<div>
			<Buah></Buah>
			<Tabel></Tabel>
			<Timer start="100" />
			<DaftarBuah />
			<HooksWithAxios></HooksWithAxios>
		</div>
	);
}

export default App;
