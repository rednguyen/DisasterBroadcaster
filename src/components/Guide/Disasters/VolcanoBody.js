import React from 'react';
import './Manuals.css';

const VolcanoBody = () => {
    return (
        <div className="Wrapper">
            <h1 className="manual-title"> What-to-do Manual for Volcanos </h1>
            <div className="content">
                <div className="subsection">
                    <h2 className="subtitle"> Preparing for a Volcano </h2>
                    <ul>
                        <li className="list"> Prepare an Emergency Kit. This kit will be utilized after a volcano to help sustain
                            you and other household members in the case of a severe earthquake where you are cut off 
                            from access to food, water, medicine, and other resources. 
                            Your kit should include at least the following items: non-perishable food, 
                            water bottles, first-aid kit,
                            emergency sleeping bag, flashlights, batteries, whistle, N95 mask, and hygiene products
                        </li>

                        <li className="list">Know the area's risk of volcano eruption: Ask local emergency management for evacuation and shelter plans, and for potential means of protection from ash. 
                            Learn more about community warning systems.
                        </li>

                        <li className="list">Have a shelter-in-place plan if your biggest risk is from ash.</li>
                    </ul>
                </div>

                <div className="subsection">
                    <h2 className="subtitle"> Protecting Yourself During a Volcano </h2>
                    <ul>
                        <li className="list">Listen to alerts, follow evacuation rules immediately.</li>

                        <li className="list">Take temporary shelter from volcanic ash where you are if you have enough supplies. 
                            Cover ventilation openings and seal doors and windows.
                        </li>

                        <li className="list">Avoid areas downwind, and river valleys downstream, of the volcano. 
                            Rubble and ash will be carried by wind and gravity.
                        </li>

                        <li className="list">Use a mask if outside, protect yourself from falling ash that can irritate skin and 
                            injure breathing passages, eyes, and open wounds.
                        </li>
                    </ul>
                </div>

                    <div className="subsection">
                    <h2 className="subtitle">Staying Safe After a Volcano</h2>
                    <ul>
                        <li className="list">Stay indoors until authorities say it is safe to go outside.</li>

                        <li className="list">Avoid driving in heavy ash. Driving will stir up volcanic ash that can clog engines and stall vehicles.</li>

                        <li className="list">If you have any breathing problems, avoid contact with ash. </li>

                        <li className="list">Be very careful in the case you must remove ash, as ash makes surfaces very slippery. </li>
                    </ul> 
                </div>
            </div>
            <a href="/guide"><p className="return-link">Return to Guides</p></a>
        </div>
    );
};

export default VolcanoBody;