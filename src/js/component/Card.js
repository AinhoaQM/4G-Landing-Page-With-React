import React from "react";

const Card = () => {
    return (
        <div className="col col-md-3 mt-3">
            <div className="card">
                <img className="card-img-top" src="https://react-hello-webapp-iota.vercel.app/rigo-baby.jpg" alt="rigo baby" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna mi, scelerisque non lobortis sed, lobortis vel nunc. Sed sollicitudin nisl ac pharetra aliquam. Mauris a suscipit justo. Donec id ligula tortor. </p>
                </div>
                <div className="m-3 mb-4 boton">
                    <a href="#" className="btn btn-primary btn-lg">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Card;