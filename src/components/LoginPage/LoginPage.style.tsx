import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

export const useStyleLoginPage = makeStyles((theme: Theme) => {
    return createStyles({
        root: {
            background: 'linear-gradient(135deg, #00b300 10%, #39ac73 60%, #002db3 99%)',
        },
        container: {
            maxWidth: 'sm',
            height: '100vh',
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.down('sm')]: {
                paddingTop: '20vh',
              },
            [theme.breakpoints.up('md')]: {
                paddingTop: '5vh',
              },
        },
        paper: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            [theme.breakpoints.down('sm')]: {
                height: '60vh',
              },
            [theme.breakpoints.up('md')]: {
                height: '90vh',
              },
              minHeight: '400px',
            width: '35vw',
            minWidth: '300px',
        },
        typo : {
            display: "flex",
            justifyContent: "center",
        },
        error: {
            color:'red'
        },
        button: {
                background: '#39ac73',
                color: 'white',
                marginTop: '1vh',
                height: '60px'
        },
        form: {
            display: "flex",
            justifyContent: "center",
            flexDirection: 'column',
            paddingLeft: '5vw',
            paddingRight: '5vw'
        },
        textfield: {
            paddingBottom: '20px'
        },
        providers: {
            display: "flex",
            justifyContent: "center",
        },
        google:{
            marginTop: '20px'
        }
    })
})