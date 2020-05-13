

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

export const useStylesOrderItem = makeStyles((theme: Theme) => {
    return (
    createStyles({
      link: {
        // '&:hover': {
        //     cursor: 'pointer'
        // }
        cursor: 'pointer',
        color: 'black',
        fontWeight: 'bold'
      }
    }))
});
