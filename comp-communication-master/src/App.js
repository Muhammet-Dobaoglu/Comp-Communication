import Personel from "./components/Personel";


function App() {
let baslik = "Personel Listesi"
let plist = [
  {"id":1,"Ad":"Umut","maas":3000},
  {"id":2,"Ad":"Şamil","maas":6000}
]
  return (
    <div>
      <Personel baslik={baslik} plist={plist}/>
    </div>
  );
}

export default App;
