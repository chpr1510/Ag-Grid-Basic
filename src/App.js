import { useRef } from 'react';
import './App.css';
import Table from './Table';
import { MdFilterAltOff } from "react-icons/md";
import { TiExport } from 'react-icons/ti';

function App() {
  const ref = useRef();
  return (
    <div class="table-container">
      <MdFilterAltOff size={50} style={{ cursor: 'pointer' }} onClick={() => ref.current.unFilter()}></MdFilterAltOff>
      <TiExport size={50} style={{ cursor: 'pointer' }} onClick={() => ref.current.filterExport()}></TiExport>
      <Table ref={ref} style={{ height: 500, width: 800 }}></Table>
    </div>
  )

}

export default App;
