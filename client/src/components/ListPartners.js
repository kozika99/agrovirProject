import React, {Fragment, useEffect, useState} from "react";

const ListPartners = () => {
    const [partners, setPartners] = useState([]);

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
        <table class="table mt-5 text-center">
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
      </tr>
    </thead>
    <tbody>
        {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>*/}
      {partners.map(partner =>(
          <tr>
              <td>{partner.nev}</td>
              <td>Modify</td>
              <td>Delete</td>
          </tr>
      ))}
    </tbody>
  </table>
    </Fragment>;
};

export default ListPartners;