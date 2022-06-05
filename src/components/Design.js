import '../App.css';
import React, { Component } from 'react'
//import Card from './card';
import blockudoku from '../images/Blockudoku.png';
import fps from '../images/FPS.png';
import rpg from '../images/RPG.png';
import rts from '../images/RTS.png';
import uncertainties from '../images/Uncertainties-EldenRing.png';




class Design extends Component {

/*
  state = {cards:[
    {id: 0, Title: "RPG Weapons and Armors", Description: "A quick example how I would balance armors and weapons inside an RPG.", Img: rpg , link:"https://www.google.com"}

  ]
}

// This go under <div className='row'>
{this.state.cards.map(card => (
                <Card
                key={card.id}
                card={card}
                />
              ))
              }
*/

  render(){
    return (
      <div className="App">
          <br/>
            <h1>Design</h1>
          <br/>
          <div className='container'>
            <hr/>
            <div className='row'>

              <div className="col-12 col-md-6 col-lg-4" >
                  <div className='paddingtop'>
                    <div className="card" >
                        <img src={blockudoku} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Mobile Game Design Blockudoku</h5>
                            <p className="card-text">That's how I would like to change the game adding a new game mode, increasing the monetization and the retention.</p>
                            <a href="https://docs.google.com/presentation/d/13LXzzE1bQXQWuCEluzaY3FD7iOn9y327_Cv6Gy_EHcs/edit?usp=sharing" className="btn btn-outline-danger">Go check</a>
                        </div>
                    </div>
                  </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" >
                <div className='paddingtop'>
                  <div className="card" >
                      <img src={fps} className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title">How I breake down FPS</h5>
                          <p className="card-text">FPS are different from past, now is hard talking about a pure fps, but they got some consistency on the evolving of the genre.</p>
                          <a href="https://docs.google.com/document/d/1v2br63cFN1Fr27bQlx4ygebL2P3CEfKZgT-YCMOefyk/edit?usp=sharing" className="btn btn-outline-danger">Go check</a>
                      </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" >
              <div className='paddingtop'>
                  <div className="card" >
                      <img src={rpg} className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title">RPG Weapons and Armors</h5>
                          <p className="card-text">A quick example how I would balance armors and weapons inside an RPG.</p>
                          <a href="https://docs.google.com/spreadsheets/d/1h74pBPI8Yitim0J-WlAp3KoAd5mpNzeZqNByzFP4IbY/edit?usp=sharing" className="btn btn-outline-danger">Go check</a>
                      </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" >
              <div className='paddingtop'>
                  <div className="card" >
                      <img src={rts} className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title">Making a new RTS</h5>
                          <p className="card-text">I made the concept for a new RTS that is based on use only 3 enemy.</p>
                          <a href="https://docs.google.com/document/d/1mrueTnG4O_p_a1JosZehc33XA5HDcEEEXRGFvZsVLoY/edit?usp=sharing" className="btn btn-outline-danger">Go check</a>
                      </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" >
              <div className='paddingtop'>
                  <div className="card" >
                      <img src={uncertainties} className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title">Uncertainties inside Elden Ring</h5>
                          <p className="card-text">I tried to found out all the uncertainties inside the title of FromSoftware.</p>
                          <a href="https://docs.google.com/document/d/1ciF6XcGldduHYx7LSGxSO8yi8HkapPfHjNy-FfulqwQ/edit?usp=sharing" className="btn btn-outline-danger">Go check</a>
                      </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" >
              <div className='paddingtop'>

              </div>
            </div>

            </div>
          </div>
      </div>
    );
  }
}

export default Design;