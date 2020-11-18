import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


class SignupBody extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: 'null', lastName: 'null', email: 'null', password: 'null'};
        this.getPassword = this.getPassword.bind(this);
        this.getEmail = this.getEmail.bind(this);
    }
    
    getPassword(ps) {
        this.setState({password: ps});
    }
    
    getEmail(em) {
        this.setState({username: em});
    }

    getFirstName(fn) {
        this.setState({firstName: fn});
    }

    getLastName(ln) {
        this.setState({lastName: ln});
    }

    handleSubmit() {
        console.log(this.state.password);
        console.log(this.state.email);
        console.log(this.state.fn);
        console.log(this.state.ln);
    }

    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={(event) => {this.getFirstName(event.target.value)}}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        onChange={(event) => {this.getLastName(event.target.value)}}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(event) => {this.getEmail(event.target.value)}}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(event) => {this.getPassword(event.target.value)}}
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.handleSubmit}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link href="/login" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            </Container>
        );
    }
}

export default withStyles(useStyles)(SignupBody);