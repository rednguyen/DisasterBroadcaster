import React from 'react';
import './Manuals.css';

const HurricaneBody = () => {
    return (
        <div className="Wrapper">
            <h1 className="manual-title"> What-to-do Manual for Hurricanes </h1>
            <div className="content">
                <div className="subsection">
                    <h2 className="subtitle"> Preparing for a Hurricane </h2>
                    <ul className>
                        <li className="list">Prepare an Emergency Kit. This kit will be utilized after a hurricane to help sustain
                            you and other household members in the case of a severe hurricane where you are cut off 
                            from access to food, water, medicine, and other resources. 
                            Your kit should include at least the following items: non-perishable food, 
                            water bottles, first-aid kit,
                            emergency sleeping bag, flashlights, batteries, whistle, N95 mask, and hygiene products
                        </li>

                        <li className="list">Know your evacuation route to a public shelter: Learn your evacuation route and practice 
                            going through route with your household members. This route can lead to a designated storm shelter, 
                            or an interior room for high winds.          
                        </li>

                        <li className="list">Keep your cell phone charged when you know a hurricane is in the forecast and
                             purchase backup charging devices to power electronics.</li>
                    </ul>
                </div>

                <div className="subsection">
                    <h2 className="subtitle"> Protecting Yourself During a Hurricane </h2>
                    <ul>
                        <li className="list">If you live in a mandatory evacuation zone and local officials tell you to evacuate, do so immediately.</li>

                        <li className="list">If trapped in a building by flooding, go to the highest level of the building. 
                            Do not climb into a closed attic. You may become trapped by rising flood water.
                        </li>

                        <li className="list">Do not walk, swim or drive through flood waters.</li>

                        <li className="list">Stay off bridges over fast-moving water. Fast-moving water can wash bridges away without warning.</li>
                    </ul>
                </div>

                    <div className="subsection">
                    <h2 className="subtitle">Staying Safe After a Hurricane</h2>
                    <ul>
                        <li className="list">Listen to local officials for information and special instructions.</li>

                        <li className="list">Be aware of the risk of electrocution. Do not touch electrical equipment if it is wet or if you are standing in water. 
                            If it is safe to do so, turn off the electricity to prevent electric shock.</li>

                        <li className="list">Avoid wading in floodwater, which can be contaminated and contain dangerous debris. </li>
                    </ul> 
                </div>
            </div>
            <a href="/guide"><p className="return-link">Return to Guides</p></a>
        </div>
    );
};

export default HurricaneBody;