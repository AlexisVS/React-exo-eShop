import React, { Component } from 'react';

class Paniers extends Component {
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
                        <p><b>Quantité : </b>{this.props.quantite}</p>
                        <button onClick={(e) => this.props.rendre(e)}>rendre</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Paniers;