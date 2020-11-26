import React from 'react';
import './Manuals.css';

const FloodBody = () => {
    return (
        <div className="Wrapper">
            <h1 className="manual-title"> What-to-do Manual for Floods </h1>
            <div className="content">
                <div className="subsection">
                    <h2 className="subtitle"> Preparing for a Flood </h2>
                    <ul>
                        <li className="list">Prepare an Emergency Kit. This kit will be utilized after a flood to help sustain
                            you and other household members in the case of a severe earthquake where you are cut off 
                            from access to food, water, medicine, and other resources. 
                            Your kit should include at least the following items: non-perishable food, 
                            water bottles, first-aid kit,
                            emergency sleeping bag, flashlights, batteries, whistle, N95 mask, and hygiene products
                        </li>

                        <li className="list">Learn and practice evacuation routes, shelter plans, and flash flood response. <ul>
                            <li className="list">Make plans to stay with family and friends that are away from the regions potentially affected by a flood. Evacuate to shelters only if you are unable to stay with family and friends.</li>
                            <li className="list">Check with local authorities to determine which public shelters are open.</li>
                        </ul>                        
                        </li>

                        <li className="list">Monitor Potential signs if your area is prone to floods (Heavy rain)</li>
                    </ul>
                </div>

                <div className="subsection">
                    <h2 className="subtitle"> Protecting Yourself During a Flood </h2>
                    <ul>
                        <li className="list">If told to evacuate, do so immediately.</li>

                        <li className="list">Go to the safe location you identified using the evacuation route. Remember to bring your emergency kit</li>

                        <li className="list">Do not walk, swim or drive through flood waters.</li>

                        <li className="list">Stay off bridges over fast-moving water. Fast-moving water can wash bridges away without warning.</li>

                        <li className="list">If your car is trapped in rapidly moving water stay inside. If water is rising inside the car get on the roof.</li>

                        <li className="list">If trapped in a building go to its highest level. Do not climb into a closed attic. You may become trapped by rising floodwater. 
                            Only get on the roof if necessary and once there signal for help</li>
                    </ul>
                </div>

                    <div className="subsection">
                    <h2 className="subtitle">Staying Safe After a Flood</h2>
                    <ul>
                        <li className="list">Return home only when authorities say it is safe.</li>

                        <li className="list">Avoid driving except in emergencies.</li>

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

export default FloodBody;