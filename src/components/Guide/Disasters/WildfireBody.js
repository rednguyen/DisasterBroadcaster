import React from 'react';
import './Manuals.css';

const WildfireBody = () => {
    return (
        <div className="Wrapper">
            <h1 className="manual-title"> What-to-do Manual for Wildfires </h1>
            <div className="content">
                <div className="subsection">
                    <h2 className="subtitle"> Preparing for a Wildfire </h2>
                    <ul>
                        <li className="list">Prepare an Emergency Kit. This kit will be utilized after a tornado to help sustain
                            you and other household members in the case of a severe earthquake where you are cut off 
                            from access to food, water, medicine, and other resources. 
                            Your kit should include at least the following items: non-perishable food, 
                            water bottles, first-aid kit,
                            emergency sleeping bag, flashlights, batteries, whistle, N95 mask, and hygiene products
                        </li>

                        <li className="list">Know your Evacuation route to a safe location away from the fire and practice going through your evacuation zone with your potential
                            household members. <ul>
                                <li className="list">Consider making plans with friends or family to shelter with them where you may be safer and more comfortable.</li>
                                <li className="list">To identify the safe public places you are able to navigate to based on your location, contact your local authorities.
                                    They will provide the latest recommendations based on the threat to your community 
                                    and appropriate safety measures. 
                                </li>
                            </ul>
                        </li>

                        <li className="list">
                            If possible, designate a room that can be closed off from outside air. Close all doors and windows. 
                            Set up a portable air cleaner to keep indoor pollution levels low when smoky conditions exist.
                        </li>

                        <li className="list">Pay attention to air quality alerts.</li>
                    </ul>
                </div>

                <div className="subsection">
                    <h2 className="subtitle"> Protecting Yourself During a Wildfire </h2>
                    <ul>
                        <li className="list">Evacuate immediately if authorities tell you to do so <ul>
                            <li className="list">If you are not ordered to evacuate but smoky conditions exist, 
                                stay inside in a safe location or go to a community building where smoke levels are lower.</li>
                            </ul>
                        </li>

                        <li className="list">If trapped, then call 911 and give your location, but be aware that emergency response could be delayed or impossible. 
                            Turn on lights to help rescuers find you.
                        </li>

                        <li className="list"> Use an N95 mask to protect yourself from smoke inhalation. 
                        </li>

                        <li className="list">Listen to local alerting systems for current emergency instructions and information
                        </li>
                    </ul>
                </div>

                    <div className="subsection">
                    <h2 className="subtitle">Staying Safe After a Wildfire</h2>
                    <ul>
                        <li className="list">Do not return home until authorities say it is safe to do so. </li>

                        <li className="list">Avoid hot ash, charred trees, smoldering debris, and live embers. The ground may contain heat pockets that can burn you or spark another fire.</li>

                        <li className="list">Use appropriate masks or respirators.</li>

                        <li className="list">If you must clean up ash, use a respirator to limit your exposure and wet debris to minimize breathing dust particles</li>
                    </ul> 
                </div>
            </div>
            <a href="/guide"><p className="return-link">Return to Guides</p></a>
        </div>
    );
};

export default WildfireBody;