import React from 'react';
import './Manuals.css';

const DroughtBody = () => {
    return (
        <div className="Wrapper">
            <h1 className="manual-title"> What-to-do Manual for Droughts </h1>
            <div className="content">
                <div className="subsection">
                    <h2 className="subtitle"> Preparing for a Drought </h2>
                    <ul>
                        <li className="list">The best way to prepare for a drought is to conserve water. Make conserving water a part of your daily life. <ol>
                                <li className="list">Choose appliances that are more energy and water efficient.</li>
                                <li className="list">Instead of using the garbage disposal, throw food in the garbage or start a compost pile to dispose it.</li>
                                <li className="list">Check all plumbing for leaks and have any leaks repaired by a plumber.</li>
                                <li className="list">Never pour water down the drain when there may be another use for it. For example, use it to water your indoor plants or garden.</li>
                                <li className="list">Contact your local water provider for information and assistance.
                                </li>
                                <li className="list">Invest in a weather-based irrigation controller—or a smart controller. These devices will automatically adjust the watering time and frequency based on soil moisture, rain, wind, and evaporation and transpiration rates. Check with your local water agency to see if there is a rebate available for the purchase of a smart controller.
                                </li> 
                                <li className="list">Reduce or eliminate lawn areas that are not used frequently. </li>
                                </ol>
                            </li>
                    </ul>
                </div>

                <div className="subsection">
                    <h2 className="subtitle"> Staying Safe During a Drought </h2>
                    <ul>
                        <li className="list">Avoid flushing the toilet unnecessarily. Dispose of tissues, insects and other similar waste in the trash rather than the toilet.</li> 

                        <li className="list">Take short showers instead of baths. Turn on the water only to get wet and lather and then again to rinse off.</li>

                        <li className="list">Store drinking water in the refrigerator. Do not let the tap run while you are waiting for water to cool.
                        </li>

                        <li className="list">Avoid using running water to thaw meat or other frozen foods. Defrost food overnight in the refrigerator or use the defrost setting on your microwave.
                        </li>

                        <li className="list">Operate clothes washers only when they are fully loaded or set the water level for the size of your load.
                        </li>

                        <li className="list">Avoid over watering your lawn and water only when needed.
                        </li> <ul>
                            <li className="list">A heavy rain eliminates the need for watering for up to two weeks. Most of the year, lawns only need one inch of water per week.</li>
                            <li className="list">If your lawn does require watering, do so early in the morning or later in the evening, when temperatures are cooler.</li> 
                            <li className="list">In extreme drought, allow lawns to die in favor of preserving trees and large shrubs.
                        </li>
                        </ul>

                    </ul>

            </div>
            <a href="/guide"><p className="return-link">Return to Guides</p></a>
        </div>
    </div>
    );
};

export default DroughtBody;