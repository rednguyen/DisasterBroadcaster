import React from 'react';
import './Manuals.css';

const EarthquakeBody = () => {
    return (
        <div className="Wrapper">
            <h1 className="manual-title"> What-to-do Manual for Earthquakes </h1>
            <div className="content">
                <div className="subsection">
                    <h2 className="subtitle"> Preparing for an Earthquake </h2>
                    <ul>
                        <li className="list">Prepare an Emergency Kit. This kit will be utilized after an earthquake to help sustain
                            you and other household members in the case of a severe earthquake where you are cut off 
                            from access to food, water, medicine, and other resources. 
                            Your kit should include at least the following items: non-perishable food, 
                            water bottles, first-aid kit,
                            emergency sleeping bag, flashlights, batteries, whistle, N95 mask, and hygiene products
                        </li>

                        <li className="list">Protect your Home: Secure heavy Items, store breakable and heavy objects under low shelves
                        </li>
                    </ul>
                </div>

                <div className="subsection">
                    <h2 className="subtitle"> Protecting Yourself During an Earthquake </h2>
                    <ul>
                        <li className="list">If you are inside, stay and do not run outside and avoid doorways.</li>

                        <li className="list">Drop, Cover, Hold on: This procedure is used to protect yourself from items falling on 
                            to you in the event of an earthquake. <ol>
                            <li className="list">Drop down to your knees and cover your head with your arms. </li>
                            <li className="list">Crawl under and hold onto the nearest table or desk. </li>
                            <li className="list">Hold onto one desk with one arm and be 
                            ready to move with the desk if the desk moves. </li> <ul>
                            <li className="list">If there is not a desk or table nearby, then crawl to the nearest interior wall without windows. 
                            Ensure you stay on your knees or bent over.</li></ul>
                            </ol>
                        </li>

                        <li className="list">If you are outdoors, stay outdoors and away from buildings and utility wires.</li>
                    </ul>
                </div>

                    <div className="subsection">
                    <h2 className="subtitle">Staying Safe After an Earthquake</h2>
                    <ul>
                        <li className="list">Expect Aftershocks to occur. <ul>
                            <li className="list">Aftershocks are smaller earthquakes that occur after the main one. 
                            Be ready to protect yourself during this aftershock using the following procedures above.
                            </li>
                            </ul>
                        </li>

                        <li className="list">
                        If you are in a damaged building, go outside and quickly move away from the building. 
                        Do not enter damaged buildings.
                        </li>

                        <li className="list">
                        If you are trapped, protect your mouth, nose and eyes from dust. 
                        Send a text, bang on a pipe or wall or use a whistle instead of 
                        shouting to help rescuers locate you.
                        </li>

                        <li className="list">
                        If you are in an area that may experience tsunamis, go inland or to higher ground 
                        immediately after the shaking stops.
                        </li>
                    </ul> 
                </div>
            </div>
            <a href="/guide"><p className="return-link">Return to Guides</p></a>
        </div>
    );
};

export default EarthquakeBody;