import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

export const useStylesDetailsDialog = makeStyles((theme: Theme) => {
    return (
    createStyles({
      dialog: {
        
      },
      container: {
        paddingBottom: theme.spacing(3),
        paddingTop : theme.spacing(3),
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      },
      mainTitle: {
        paddingLeft: theme.spacing(2),
        paddingBottom : theme.spacing(2)
      },
      title: {
          paddingBottom : theme.spacing(1)
      }, 
      main: {
        padding: theme.spacing(3),
        margin : theme.spacing(2)
      },
      contact: {
        padding: theme.spacing(3),
        margin : theme.spacing(2)
      },
      details: {
        padding: theme.spacing(3),
        margin : theme.spacing(2)
      }
    }))
});
