import React, { Fragment, useState } from "react";

// ceginfo - cegelehetoseg ... nev, települes..

const InputPartner = () => {

    const [nev, setPartner] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {nev}
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
        <h1 className="text-center mt-5">Partner List</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={nev} 
            onChange={e => setPartner(e.target.value)}/>
            <button className="btn btn-success">Add</button>
        </form>
     </Fragment>
    );
}

export default InputPartner;