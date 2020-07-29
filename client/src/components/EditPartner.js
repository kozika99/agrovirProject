import React, {Fragment, useState} from "react";
import ListPartners from "./ListPartners";


const EditPartner = ({ partner }) => {
    
    const [nev, setNev] = useState(partner.nev);
    const [cegforma, setCegforma] = useState(partner.cegforma);
    const [adoszam, setAdoszam] = useState(partner.adoszam);
    const [cegjegyzekszam, setCegjegyzekszam] = useState(partner.cegjegyzekszam);
    const [bankszamlaszam, setBankszamlaszam] = useState(partner.bankszamlaszam);
    const [telepules, setTelepules] = useState(partner.telepules);
    const [cim, setCim] = useState(partner.cim);
    const [telefonszam, setTelefonszam] = useState(partner.telefonszam);
    const [megjegyzes, setMegjegyzes] = useState(partner.megjegyzes);

    //edit partner function
    const updatePartner = async e => {
        e.preventDefault();
        try {
            const body = {nev, cegforma, adoszam, cegjegyzekszam, bankszamlaszam, telepules, cim, telefonszam, megjegyzes};
            const response = await fetch(`http://localhost:5000/partners/${partner.cegId}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${partner.nev}`} >
  Edit
</button>


<div class="modal" id={`id${partner.nev}`}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Partner módosítás</h4>
        <button type="button" class="close" data-dismiss="modal" >&times;</button>
      </div>
      <div class="modal-body">
      <form>
            <div class="form-row">
                <div class="col">
                    <label for="exampleInputNév">Név</label>
                    <input type="text" class="form-control" id="exampleInputNev1" placeholder="Cégnév" value={nev} onChange={e => setNev(e.target.value)} />
                 </div>   
                <div class="col">
                    <label for="exampleInputCégforma">Cégforma</label>
                    <input type="text" class="form-control" id="exampleInputCegforma1" placeholder="Cégforma" value={cegforma} onChange={e => setCegforma(e.target.value)} />
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <label for="exampleInputAdószám">Adószám</label>
                    <input type="number" class="form-control" id="exampleInputAdószám1" placeholder="Adószám" value={adoszam} onChange={e => setAdoszam(e.target.value)} />
                </div>
                    <div class="col">
                    <label for="exampleInputCégjegyzékszám">Cégjegyzékszám</label>
                    <input type="number" class="form-control" id="exampleInputCégjegyzékszám1" placeholder="Cégjegyzékszám" value={cegjegyzekszam} onChange={e => setCegjegyzekszam(e.target.value)} />
                </div>
            </div>
            <div class="form-group">
                <label for="exampleInputTelepülés">Település</label>
                <input type="text" class="form-control" id="exampleInputTelepülés1" placeholder="Település" value={telepules} onChange={e => setTelepules(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="exampleInputCím">Cím</label>
                <input type="text" class="form-control" id="exampleInputCím1" placeholder="Cím" value={cim} onChange={e => setCim(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="exampleInputTelefonszám">Telefonszám</label>
                <input type="number" class="form-control" id="exampleInputTelefonszám1" placeholder="Telefonszám" value={telefonszam} onChange={e => setTelefonszam(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="exampleInputBankszámlaszám">Bankszámlaszám</label>
                <input type="number" class="form-control" id="exampleInputBankszámlaszám1" placeholder="Bankszámlaszám" value={bankszamlaszam} onChange={e => setBankszamlaszam(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="exampleInputMegjegyzés">Megjegyzés</label>
                <input type="text" class="form-control" id="exampleInputMegjegyzés1" placeholder="Megjegyzés" value={megjegyzes} onChange={e => setMegjegyzes(e.target.value)} />
            </div> 
        </form>
      </div>


      <div class="modal-footer">
        <button 
        type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updatePartner(e)}>
            Edit
        </button>

        <button 
        type="button" class="btn btn-danger" data-dismiss="modal">
            Close
        </button>
      </div>
    </div>
  </div>
</div>
        </Fragment>
    )    
}
export default EditPartner;