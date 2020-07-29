import React, {Fragment, useEffect, useState} from "react";
import EditPartner from "./EditPartner";

const ListPartners = () => {
    const [partners, setPartners] = useState([]);


    // delete partner function

    const deletePartner = async(id) => {
      try {
        const deletePartner1 = await fetch(`http://localhost:5000/partners/${id}`, {
        method: "DELETE"});

        console.log(deletePartner);
        //setPartners(partners.filter(partner => partner.cegId !== id));
      } catch (error) {
        console.error(error.message);
      }
    }

    const getPartners = async() => {
        try {
            const respone = await fetch("http://localhost:5000/partners")
            const jsonData = await respone.json();

            setPartners(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getPartners();
    }, []);

    return <Fragment>
        <table class="table">
    <thead>
      <tr>
        <th>Név</th>
        <th>Cégforma</th>
        <th>Adószám</th>
        <th>Cégjegyzékszám</th>
        <th>Település</th>
        <th>Cím</th>
        <th>Telefonszám</th>
        <th>Bankszámlaszám</th>
        <th>Megjegyzés</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {partners.map(partner =>(
          <tr key={partner.cegId}>
              <td>{partner.nev}</td>
              <td>{partner.cegforma}</td>
              <td>{partner.adoszam}</td>
              <td>{partner.cegjegyzekszam}</td>
              <td>{partner.telepules}</td>
              <td>{partner.cim}</td>
              <td>{partner.telefonszam}</td>
              <td>{partner.bankszamlaszam}</td>
              <td>{partner.megjegyzes}</td>
              <td>
                <EditPartner partner = {partner}/>
              </td>
              <td><button 
                className="btn btn-danger"
                onClick={() => deletePartner(partner.cegId)}
              >Delete</button></td>
          </tr>
      ))}
    </tbody>
  </table>
    </Fragment>;
};

export default ListPartners;