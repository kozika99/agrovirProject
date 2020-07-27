import React, { Fragment, useState } from "react";

const InputPartner = () => {

    const [nev, setNev] = useState("");
    const [cegforma, setCegforma] = useState("");
    const [adoszam, setAdoszam] = useState("");
    const [cegjegyzekszam, setCegjegyzekszam] = useState("");
    const [bankszamlaszam, setBankszamlaszam] = useState("");
    const [telepules, setTelepules] = useState("");
    const [cim, setCim] = useState("");
    const [telefonszam, setTelefonszam] = useState("");
    const [megjegyzes, setMegjegyzes] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {nev, cegforma, adoszam, cegjegyzekszam, bankszamlaszam, telepules, cim, telefonszam, megjegyzes};
            const response = await fetch("http://localhost:5000/partners", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
    <Fragment>
<div class="container">
  <h2>Partner List</h2>
    <button type="button" class="btn btn-primary" data-toggle="modal" href="#myModal">New Partner</button>
    <button type="button" class="btn btn-secondary" data-toggle="modal" >Export</button>
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">New Partner</h4>
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
            <button type="button" class="btn btn-primary"  data-dismiss="modal" onClick={onSubmitForm}>Save</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
     </Fragment>
    );
}

export default InputPartner;