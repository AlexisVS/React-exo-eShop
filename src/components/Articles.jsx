import React, { Component } from 'react';

// Affichera tous les articles disponible

class Articles extends Component {
    render () {
        return (
            <div className="article">
                <div className="article-head">
                    <h3>{this.props.nom}</h3>
                </div>
                <div className="article-body">

                    <div className="article-body-left">
                        <img src={this.props.imgUrl} alt="" />
                    </div>

                    <div className="article-body-right">
                        <p><b>Nom : </b>{this.props.nom}</p>
                        <p><b>Stock : </b>{this.props.stock}</p>
                        <p><b>Prix : </b>{this.props.prix}€</p>
                        <button onClick={this.props.acheter}>Acheter</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Articles;