import React, { Component } from 'react';

class Articles extends Component {
    render () {
        let bgcConditionnal = this.props.stock === 1 && "orange" || this.props.stock === 0 && "rouge"
        return (
            <div className={`article ${bgcConditionnal}`}>
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
                        {this.props.monArgent >= this.props.prix == true && <button onClick={this.props.acheter}>Acheter</button>}
                    </div>
                </div>
            </div>
        );
    }
}
export default Articles;