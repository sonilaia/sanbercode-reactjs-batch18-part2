import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<div class="form-buah">
				<h1>Form Pembelian Buah</h1>
				<table>
					<tr>
						<td>Nama Pelanggan</td>
						<td>
							<input type="text" />
						</td>
					</tr>
					<tr>
						<td>Daftar Item</td>
						<td>
							<input type="checkbox" /> <label>Semangka</label> <br />
							<input type="checkbox" /> <label>Jeruk </label> <br />
							<input type="checkbox" /> <label>Nanas</label> <br />
							<input type="checkbox" /> <label>Salak</label> <br />
							<input type="checkbox" /> <label>Anggur</label> <br />
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default App;
