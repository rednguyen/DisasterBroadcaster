import React from 'react';
import './Manuals.css';

const TsunamiBody = () => {
    return (
        <div className="Wrapper">
            <h1 className="manual-title"> What-to-do Manual for Tsunamis </h1>
            <div className="content">
                <div className="subsection">
                    <h2 className="subtitle"> Preparing for a Tsunami </h2>
                    <ul>
                        <li className="list"> Prepare an Emergency Kit. This kit will be utilized after a volcano to help sustain
                            you and other household members in the case of a severe tsunami where you are cut off 
                            from access to food, water, medicine, and other resources. 
                            Your kit should include at least the following items: non-perishable food, 
                            water bottles, first-aid kit,
                            emergency sleeping bag, flashlights, batteries, whistle, N95 mask, and hygiene products
                        </li>

                        <li className="list">Be aware of the signs of an earthquake, as tsunamis occur after earthquakes: loud roar from ocean, 
                        sudden draining of water in ocean floor, sudden rise of water
                        </li>

                        <li className="list">Learn About the Risk of Tsunami in your area. Check the risk of tsunami in your area, and find a potential evacuation route in the case of a tsunami. 
                        Evacuation routes are marked with an arrow directing to a higher ground. Practice going to this evacuation route.</li>
                    </ul>
                </div>

                <div className="subsection">
                    <h2 className="subtitle"> Protecting Yourself During a Tsunami </h2>
                    <ul>
                        <li className="list">Earthquakes usually occur before a tsunami happens: drop to your hands and knees. Cover your head and neck with your arms. Hold on to any sturdy furniture until the shaking stops. 
                        Crawl only if you can reach better cover, but do not go through an area with more debris. <ul>
                            <li> If shaking stops and signs of a tsunami occur, evacuate immediately using the evacuation route.</li>
                        </ul>
                        </li>

                        <li className="list">If you are outside of the tsunami hazard zone and receive a warning, then stay where you are unless officials tell you otherwise. Leave immediately if told to do so.
                        </li>

                        <li className="list">If you are in the water, then grab onto something that floats, such as a raft, tree trunk, or door.
                        </li>

                        <li className="list">If you are in a boat, then face the direction of the waves and head out to sea.
                        </li>

                        <li className="list"> If you are in a harbor, then go inland.
                        </li> 
                    </ul>
                </div>

                    <div className="subsection">
                    <h2 className="subtitle">Staying Safe After a Tsunami</h2>
                    <ul>
                        <li className="list">Listen to local alerts on areas to avoid .</li>

                        <li className="list">Be aware of risk of electrocution.</li>

                        <li className="list">Avoid wading in floodwater.</li>
                    </ul> 
                </div>
            </div>
            <a href="/guide"><p className="return-link">Return to Guides</p></a>
        </div>
    );
};

export default TsunamiBody;