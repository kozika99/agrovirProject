import React, {Fragment, useEffect, useState} from "react";
import EditPartner from "./EditPartner";

const ListPartners = () => {
    const [partners, setPartners] = useState([]);


    // delete partner function

    const deletePartner = async(id) => {
      try {
        const deletePartner = await fetch(`http://localhost:5000/partners/${id}`, {
        method: "DELETE"});


        setPartners(partners.filter(partners => partners.cegId !== id));
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
      {partners.map(partners =>(
          <tr key={partners.cegId}>
              <td>{partners.nev}</td>
              <td>{partners.cegforma}</td>
              <td>{partners.adoszam}</td>
              <td>{partners.cegjegyzekszam}</td>
              <td>{partners.telepules}</td>
              <td>{partners.cim}</td>
              <td>{partners.telefonszam}</td>
              <td>{partners.bankszamlaszam}</td>
              <td>{partners.megjegyzes}</td>
              <td>
                <EditPartner partner = {partners}/>
              </td>
              <td><button 
                className="btn btn-danger"
                onClick={() => deletePartner(partners.cegId)}
              >Delete</button></td>
          </tr>
      ))}
    </tbody>
  </table>
    </Fragment>;
};

export default ListPartners;