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
            paddingTop: '5vh',
        },
        paper: {
            display: "flex",
            // justifyContent: "center",
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '90vh',
            width: '35vw',
            minWidth: '300px',
        },
        typo : {
            display: "flex",
            justifyContent: "center",
            // paddingTop: '15vh',
            // paddingBottom: '10vh'
        },
        error: {
            color:'red'
        },
        button: {
            
                background: '#39ac73',
                color: 'white',
                marginTop: '1vw',
                height: '4vw'
        },
        form: {
            display: "flex",
            justifyContent: "center",
            flexDirection: 'column',
            paddingLeft: '5vw',
            paddingRight: '5vw'
        },
        textfield: {
            paddingBottom: '1vw'
        },
        providers: {
            display: "flex",
            justifyContent: "center",
        },
        google:{
            marginTop: '1vh'
        }
    })
})