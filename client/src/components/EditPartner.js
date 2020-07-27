import React, {Fragment, useState} from "react";
import ListPartners from "./ListPartners";

const EditPartner = ({ partner }) => {
    
    const [nev, setNev] = useState(partner.nev);

    //edit nev function
    const updateNev = async e => {
        e.preventDefault();
        try {
            const body = {nev};
            const response = await fetch(`http://localhost:5000/partners/${partner.ceginfo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${partner.ceginfo_id}`}>
  Edit
</button>


<div class="modal" id={`id${partner.ceginfo_id}`} onClick={() => setNev(partner.nev)}>
  <div class="modal-dialog">
    <div class="modal-content">


      <div class="modal-header">
        <h4 class="modal-title">Partner módosítás</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={() => setNev(partner.nev)}
        >&times;</button>
      </div>


      <div class="modal-body">
        <input type="text" className="form-control" value={nev} onChange={e => setNev(e.target.value)}/>
      </div>


      <div class="modal-footer">
        <button 
        type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateNev(e)}>
            Edit
        </button>

        <button 
        type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setNev(partner.nev)}>
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