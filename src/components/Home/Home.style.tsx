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
        background: 'linear-gradient(135deg, #456F61 50%, #417991 90%)',
        color: '#FFF',
        fill: '#FFF',
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: 'auto',
      },
      toolbar: {
        background: '#edf2f7'
      },
      icon: {
        fill: '#edf2f7'
      },
      content: {
        flexGrow: 1,
      },
    }));
  });

  export default useStyles;