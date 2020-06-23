import React from 'react';
import FunfactItem from "./funfactItem";

import funfactbg from '../../assets/img/fun-fact-bg.jpg'
import Funfacts from '../../data/Funfact/funfact';
import CustomBarChart from '../Chart/CustomBarChart';
// import CustomPieChart from '../Chart/CustomPieChart'
import chartData1 from '../../data/Chart/barchart-1';
import chartData2 from '../../data/Chart/barchart-2';

class Funfact extends React.Component {

    render () {

        return (
            <div className="fun-fact-area sm-top parallax" style={{ backgroundImage: `url(${funfactbg})` }}>
                <div className="container">
                    <div className="row mtn-40">
                        {
                            Funfacts.map(funfact => (
                                <FunfactItem key={funfact.id}
                                    counterNumber={funfact.counterNumber}
                                    counterText={funfact.counterText}
                                    type={funfact.type} />
                            ))
                        }
                    </div>
    
                    <div class="row">
                        <CustomBarChart data={chartData1}/>
                        <CustomBarChart data={chartData2}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Funfact;