import React from 'react';
import "./Footer.css";
import PIC from './Figure.jpg'

const Footer = () => {
    return (
            <div className = "row">
                <p className = "col-sm">
                    <h1 style={{ color: 'rgb(32, 32, 32)' }}>Countries</h1>
                        <li> <a href="#" className = "CountryMenu">United States </a> </li>
                        <li> <a href="#" className = "CountryMenu">United Kingdom </a></li>
                        <li> <a href="#" className = "CountryMenu">United Arab Emirate </a></li>
                        <li> <a href="#" className = "CountryMenu">Mexico </a></li>
                        <li> <a href="#" className = "CountryMenu">Australia </a></li>
                    
                </p>

                <p className = "col-bd1">
                    <h1 style={{ color: 'rgb(32, 32, 32)' }}>News</h1>
                    <p>
                    Votes continue to be counted in the handful of states where a winner has yet to be projected 
                    in the 2020 presidential election, with officials releasing new batches of results on Thursday 
                    showing Joe Biden improving his standing in three states and President Trump making inroads in a fourth.
                    CBS News projects Biden has secured 253 electoral votes, just 17 shy of the 270 needed to win the presidency. Mr. Trump is currently 
                    projected to win 213 electoral votes. 
                    </p>

                    <p>
                    The race now centers on Arizona, Nevada, Georgia, Pennsylvania and North Carolina, following projections on Wednesday that Biden will win Michigan 
                    and Wisconsin. Biden holds slim leads in Nevada and Arizona, 
                    both of which are still considered likely Democratic states in CBS News' estimation. 
                    </p>

                    <p>
                    Biden expanded his lead in Nevada in new results from mostly Democratic counties, with his margin more than doubling since Wednesday. He has also cut 
                    into the president's lead in Georgia, trailing by less than 13,000 votes with about 47,000 remaining to be counted.
                    </p>

                    <p>
                    Mr. Trump's standing improved in Arizona after more ballots were reporting early Thursday morning, although he trails Biden by roughly 69,000 votes and
                    faces a steep uphill climb. Arizona officials won't report more results from populous Maricopa County until later in the evening.
                    </p>

                    <img src = {PIC} width="500px" height="400px"/>
                </p>


                <p className = "col-bd2">
                    <h1 style={{ color: 'rgb(32, 32, 32)' }}>Interactive Session</h1>
                    <h1>
                        User 1
                    </h1>

                    <h1>
                        User 2
                    </h1>

                    <h1>
                        User 3
                    </h1>


                    <h1>
                        User 4
                    </h1>

                </p>
            </div>
    )
}

export default Footer