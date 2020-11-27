import React from 'react';
import './Manuals.css';

const TornadoBody = () => {
    return (
        <div className="Wrapper">
            <h1 className="manual-title"> What-to-do Manual for Tornados </h1>
            <div className="content">
                <div className="subsection">
                    <h2 className="subtitle"> Preparing for a Tornado </h2>
                    <ul>
                        <li className="list">Prepare an Emergency Kit. This kit will be utilized after a tornado to help sustain
                            you and other household members in the case of a severe earthquake where you are cut off 
                            from access to food, water, medicine, and other resources. 
                            Your kit should include at least the following items: non-perishable food, 
                            water bottles, first-aid kit,
                            emergency sleeping bag, flashlights, batteries, whistle, N95 mask, and hygiene products
                        </li>

                        <li className="list">Identify and practice going to a safe shelter. 
                            Best protection is provided in a shelter that is small, windowless, and the lowest level of a building
                        </li>

                        <li className="list">Be aware of the signs of a tornado: Rotating funnel cloud or an approaching cloud of debris.
                        </li> 
                            
                        <li className="list">As certain areas are more prone to tornados than others, check if your location has a warning system for Tornados.</li>
                    </ul>
                </div>

                <div className="subsection">
                    <h2 className="subtitle"> Protecting Yourself During a Tornado </h2>
                    <ul>
                        <li className="list">Immediately go to shelter that you identified.</li>

                        <li className="list">Take Cover: Shield your head and neck with your arms. If possible, take additional cover using blankets or other furniture around you <ul>
                            <li className="list">If you are in a car or outdoors, shield your head and neck with your arms and take additional cover with a coat or blanket if possible.</li>
                        </ul>
                        </li>

                        <li className="list">Do not attempt to outrun a tornado in a vehicle
                        </li>

                        <li className="list">Listen to local alerting systems for current emergency instructions and information
                        </li>
                    </ul>
                </div>

                    <div className="subsection">
                    <h2 className="subtitle">Staying Safe After a Tornado</h2>
                    <ul>
                        <li className="list">Listen to local alerting systems for updates on emergency instructions and information </li>

                        <li className="list">If trapped, cover mouth with cloth or hand to avoid breathing dust</li>

                        <li className="list">Stay away from power lines and broken utility lines. </li>

                        <li className="list">Do not attempt to enter damaged buildings. </li>
                    </ul> 
                </div>
            </div>
            <a href="/guide"><p className="return-link">Return to Guides</p></a>
        </div>
    );
};

export default TornadoBody;