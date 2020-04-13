import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 242;

const useStyles = makeStyles((theme: Theme) => {
    return (
    createStyles({
      root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        background: '#456F61',
        color: '#FFF',
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: 'auto',
      },
      toolbar: {
        background: '#E6ECF4'
      },
      content: {
        flexGrow: 1,
        //padding: theme.spacing(3),
      },
    }));
  });

  export default useStyles;