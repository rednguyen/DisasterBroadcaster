import React from 'react';
import "./Body.css";
import PIC from './Figure.jpg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const classes = {
    Paper:{padding: 20, marginTop: 10, marginBottom: 10}
}

const Body = () => {
    return (
        <div>
<<<<<<< HEAD
    
            <Grid >
=======
        <Grid container>
            <Grid item sm = {12}>
>>>>>>> jiaao1
                <Paper style = {{padding: 10}}>
                    <h1 className = "col-bd1">Top Stories</h1>
                        <p Paper style = {{padding: 20, fontSize: 20}}>
                        <img className = "Storm" src = {PIC} width="250px" height="250px"/>
                            Votes continue to be counted in the handful of states where a winner has yet to be projected 
                            in the 2020 presidential election, with officials releasing new batches of results on Thursday 
                            showing Joe Biden improving his standing in three states and President Trump making inroads in a fourth.
                            CBS News projects Biden has secured 253 electoral votes, just 17 shy of the 270 needed to win the presidency. Mr. Trump is currently 
                            projected to win 213 electoral votes. 
                            
                        </p>
                        <p Paper style = {{padding: 20, fontSize: 20}}>
                            The race now centers on Arizona, Nevada, Georgia, Pennsylvania and North Carolina, following projections on Wednesday that Biden will win Michigan 
                            and Wisconsin. Biden holds slim leads in Nevada and Arizona, 
                            both of which are still considered likely Democratic states in CBS News' estimation. 
                        </p>
                        <p Paper style = {{padding: 20, fontSize: 20}}>
                        Biden expanded his lead in Nevada in new results from mostly Democratic counties, with his margin more than doubling since Wednesday. He has also cut 
                        into the president's lead in Georgia, trailing by less than 13,000 votes with about 47,000 remaining to be counted.
                        </p>
                        <p Paper style = {{padding: 20, fontSize: 20}}>
                        Mr. Trump's standing improved in Arizona after more ballots were reporting early Thursday morning, although he trails Biden by roughly 69,000 votes and
                        faces a steep uphill climb. Arizona officials won't report more results from populous Maricopa County until later in the evening.
                        </p>
                    
                </Paper>
            </Grid>
<<<<<<< HEAD
            <Grid>
=======
            <Grid item sm = "12">
>>>>>>> jiaao1
                <Paper style = {{padding: 10}}>               
                    <h1 className = "col-bd2" style={{ color: 'rgb(32, 32, 32)' }}>Community</h1>
                    <h5>
                        User 1
                    </h5>
                    <h5>
                        User 2
                    </h5>
                    <h5>
                        User 3
                    </h5>
                    <h5>
                        User 4
                    </h5>               
                </Paper>
            </Grid>
      
        </div>
    )
    
}

export default Body