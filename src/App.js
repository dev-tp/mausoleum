import { ArrowBack } from '@material-ui/icons';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import { Link, Route, Routes } from 'react-router-dom';

import Mausoleum from './components/Mausoleum';
import routes from './routes';

routes.push({
  component: Mausoleum,
  label: '',
  path: '/',
});

const useStyles = makeStyles((theme) => ({
  fab: {
    left: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(2),
  },
  label: {
    background: '#fff',
    bottom: theme.spacing(2),
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%)',
  },
}));

export default function App() {
  const classNames = useStyles();

  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <>
                {route.path !== '/' && (
                  <>
                    <IconButton
                      className={classNames.fab}
                      component={Link}
                      to="/"
                    >
                      <ArrowBack />
                    </IconButton>
                    <Typography className={classNames.label}>
                      {route.label}
                    </Typography>
                  </>
                )}
                <route.component />
              </>
            }
          />
        ))}
      </Routes>
    </div>
  );
}
