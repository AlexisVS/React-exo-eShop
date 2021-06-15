import React, { Component } from 'react';

// doit afficher tous les articles achetés

class Paniers extends Component {
    render() {
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
                        <p><b>Quantité : </b>{this.props.quantite}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Paniers;