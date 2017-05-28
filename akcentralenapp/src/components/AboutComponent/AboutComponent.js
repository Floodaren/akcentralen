import React, { Component } from 'react';
import './AboutComponent.css';
    
class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <h2>Vad vi erbjuder</h2>
        <br/>
        <div className="row">
            <div className="col-sm-3">
                <img src={'https://image.ibb.co/nLfvY5/alamcentral.png'} alt=""/>
                <h4>Övervakning</h4>
                <p>Övervakning av alla kyl- och frysinstallationer i butiken via ett 
                    bemannat övervakningssystem – dygnet runt – alla dagar i 
                    veckan – hela året – 24/7/365.</p>
            </div>
            <div className="col-sm-3">
                <img src={'https://image.ibb.co/jQjYLk/optimeret_butik.png'} alt=""/>
                <h4>Larm</h4>
                <p>Felmeddelanden behandlas i vår larmcentral som är bemannat dygnet om. 
                    Problem löses via fjärrstyrning, med assistans av 
                    butikspersonal eller via tillkallad service.</p>
            </div>
            <div className="col-sm-3">
                <img src={'https://image.ibb.co/eQNaY5/systemovervaagning.png'} alt=""/>
                <h4>Temperaturkvalitet</h4>
                <p>Konstant övervakning och snabb reaktion säkrar korrekta temperaturer dygnet runt. 
                    Kyllarmenskvalitet hålls konstant på topp 
                    liksom kundernas nöjdhet.</p>
            </div>
            <div className="col-sm-3">
                <img src={'https://image.ibb.co/bDEpt5/temperaturkvalitet.png'} alt=""/>
                <h4>Temperaturkvalitet</h4>
                <p>Stora besparingar uppnås vid optimala temperaturer i olika kyldelar, 
                    liksom minimerat varuspill vid konstant 
                    övervakning – vilket kan dokumenteras!</p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;