import React, { Component } from 'react';
import Panier from './components/Panier'
import Articles from './components/Articles';

class App extends Component {

  state = {
    argent: 20,
    panier: [],
    articles: [{
      nom: "Chocolat",
      prix: 1,
      stock: 10,
      imgUrl: "https://img2.freepng.fr/20180331/sqq/kisspng-chocolate-cake-chocolate-bar-chocolate-brownie-hot-choco-5abf6f10593447.6611430815224952483654.jpg"
    },
    {
      nom: "Tic Tac",
      prix: 2,
      stock: 10,
      imgUrl: "https://www.tictac.com/ca/sites/tictac30_ca/files/styles/700x700_scaled/public/2020-11/assety_canadafresh_mint_ca.png"
    },
    {
      nom: "Cloppe",
      prix: 10,
      stock: 20,
      imgUrl: "https://e1.pngegg.com/pngimages/174/130/png-clipart-125-red-marlboro-cigarette.png"
    }
    ],
  }


  // ? Cree une fonction pour acheter et mettre dans le panier.
  // ? La fonction doit être créer dans le composant App.js et 
  // ? doit être  passer dans le composant Article.js (props, setState)
  acheter = (e) => {

    let prix, stock, nom, imgUrl, articlesState, panier, newPanier

    prix = e.target.parentNode.children[2].lastChild.wholeText.slice(0, -1);
    stock = e.target.parentNode.children[1].lastChild.data;
    nom = e.target.parentNode.children[0].lastChild.data;
    imgUrl = e.target.parentNode.previousSibling.children[0].src;
    articlesState = this.state.articles
    panier = this.state.panier
    newPanier = [...panier]




    // ! Si j'ai pas d'argout ou qu'il y a plus d'article
    if (this.state.argent < prix || stock < 1) {

      if (this.state.argent < prix) {
        alert("Vous n'avez pas assez d'argent pour acheter cet article")
      }

      if (stock < 1) {
        alert("Nous n'avons plus ce produit en stock")
      }
    }

    // ! Si j'ai de l'argent et qu'il y a l'article
    else {
      this.setState({
        argent: this.state.argent - prix,
      })

      //! Si mon panier est égale a 0
      if (this.state.panier.length == 0) {

        articlesState.forEach((e, i) => {
          if (e.nom == nom) {
            e.stock = e.stock - 1
          }
        })

        this.setState(
          {
            panier: [{ nom: nom, quantite: 1, imgUrl: imgUrl }],
            articles: articlesState
          })
      }

      //! Si mon panier est plus grand que zéro
      else if (this.state.panier.length > 0) {

        // * Probleme : le if et le else sont toujours appelé 
        // * alors que c'est le if et si il n'y a rien le else
        for (let index = 0; index < panier.length; index++) {
          if (panier[index].nom == nom) {
            // * si je clique sur un item que j'ai déja

            panier.forEach(e => {
              if (e.nom == nom) {
                e.quantite = e.quantite + 1
              }
            })

            articlesState.forEach(e => {
              if (e.nom == nom) {
                e.stock = e.stock - 1
              }
            })

            this.setState({ panier })
          }


        }

        // * faire un tableau qui va stocker juste les nom d'item dans mon panier
        let panierArticlesFind
        panierArticlesFind = []

        panier.forEach(e => {
          panierArticlesFind.push(e.nom)
        });

        if (panierArticlesFind.every(e => e != nom) == true) {
          newPanier.push({
            nom: nom,
            quantite: 1,
            imgUrl: imgUrl
          })

          articlesState.forEach(e => {
            if (e.nom == nom) {
              e.stock = e.stock - 1
            }
          })
          panier = newPanier

          this.setState({ panier: newPanier, articles: articlesState })
        }
      }
    }
  }

  rendre = (e) => {
    let nom, quantite, newState;
    nom = e.target.parentNode.children[0].lastChild.data
    quantite = e.target.parentNode.children[1].lastChild.data
    newState = this.state
    let { argent, panier, articles } = newState
    console.log(panier);
    switch (nom) {
      case "Chocolat":
        newState.argent += 1
        newState.articles[0].stock += 1
        break;
      case "Tic Tac":
        newState.argent += 2
        newState.articles[1].stock += 1
        break;
      case "Cloppe":
        newState.argent += 10
        newState.articles[2].stock += 1
        break;
    }

    newState.panier.forEach(e => {
      if (e.nom == nom) {
        e.quantite -= 1
      }
    })
    console.log(newState.articles[0]);
    this.setState({ argent: newState.argent })


    // ? Je doit retirer de 1 la quantite de l'element dans mon paniner
    // ? et la rajouter dans le bonne objet dans les articles


  }

  articlesMap = () => this.state.articles.map((el, index) => (
    <Articles
      acheter={(e) => this.acheter(e)}
      key={index}
      nom={el.nom}
      prix={el.prix}
      stock={el.stock}
      imgUrl={el.imgUrl}
      monArgent={this.state.argent}
    />
  ))

  panierMap = () => this.state.panier.map((el, index) => {
    if (el.quantite >= 1) {
      return (<Panier
        key={index}
        nom={el.nom}
        imgUrl={el.imgUrl}
        quantite={el.quantite}
        rendre={(e) => this.rendre(e)}
      />)
    }
  }

  )


  render () {

    { console.log(this.state) }

    return (
      <div>
        <h1>Eshop</h1>
        <p className='monArgent'>Mon argent : {this.state.argent}</p>
        <div className="app">
          <div className="articles">
            <h2>Articles</h2>
            {this.articlesMap()}
          </div>
          <div className="panier">
            <h2>Panier</h2>
            {this.panierMap()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;