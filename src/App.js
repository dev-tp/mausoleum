import { Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Search from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

import AlcoveOfTheSaintsABCD from './components/alcove-of-the-saints/abcd';
import AlcoveOfTheSaintsEFG from './components/alcove-of-the-saints/efg';
import AlcoveOfTheSaintsHIJ from './components/alcove-of-the-saints/hij';
import AlcoveOfTheSaintsKLM from './components/alcove-of-the-saints/klm';
import AlcoveOfTheSaintsNOP from './components/alcove-of-the-saints/nop';
import AlcoveOfTheSaintsQRS from './components/alcove-of-the-saints/qrs';
import AlcoveOfTheSaintsTUV from './components/alcove-of-the-saints/tuv';
import AlcoveOfTheSaintsWX from './components/alcove-of-the-saints/wx';
import AlcoveOfTheSaintsYZAA from './components/alcove-of-the-saints/yzaa';
import AnnexAlcoveABCD from './components/annex-alcove/abcd';
import AnnexAlcoveEFG from './components/annex-alcove/efg';
import CenterCorridor1 from './components/center-corridor/1';
import CenterCorridor2 from './components/center-corridor/2';
import CorridorANorth from './components/corridor-a/north';
import CorridorASouth from './components/corridor-a/south';
import CorridorBNorth from './components/corridor-b/north';
import CorridorBSouth from './components/corridor-b/south';
import CorridorCNorth from './components/corridor-c/north';
import CorridorCSouth from './components/corridor-c/south';
import CorridorDNorth from './components/corridor-d/north';
import CorridorDSouth from './components/corridor-d/south';
import CorridorENorth from './components/corridor-e/north';
import CorridorESouth from './components/corridor-e/south';
import CorridorFNorth from './components/corridor-f/north';
import CorridorFSouth from './components/corridor-f/south';
import GrandFoyer from './components/grand-foyer';
import LambOfGodAlcove from './components/lamb-of-god-alcove';
import Mausoleum from './components/mausoleum';
import NorthCorridor1 from './components/north-corridor/1';
import NorthCorridor2 from './components/north-corridor/2';
import NorthCorridor3 from './components/north-corridor/3';
import PresentationAlcoveAAHH from './components/presentation-alcove/aa-hh';
import PresentationAlcoveAF from './components/presentation-alcove/a-f';
import PresentationAlcoveGL from './components/presentation-alcove/g-l';
import PresentationAlcoveMR from './components/presentation-alcove/m-r';
import PresentationAlcoveSX from './components/presentation-alcove/s-x';
import PrivateChapelNorth from './components/private-chapel/north';
import PrivateChapelSouth from './components/private-chapel/south';
import PrivateRoomA from './components/private-room/a';
import PrivateRoomB from './components/private-room/b';
import PrivateRoomC from './components/private-room/c';
import PrivateRoomD from './components/private-room/d';
import PrivateRoomE from './components/private-room/e';
import PrivateRoomF from './components/private-room/f';
import PrivateRoomG from './components/private-room/g';
import PrivateRoomH from './components/private-room/h';
import SouthCorridor1 from './components/south-corridor/1';
import SouthCorridor2 from './components/south-corridor/2';
import SouthCorridor3 from './components/south-corridor/3';
import StCeciliaAlcove from './components/st-cecilia-alcove';
import StJohnAlcove from './components/st-john-alcove';
import TempleAlcoveAAHH from './components/temple-alcove/aa-hh';
import TempleAlcoveAF from './components/temple-alcove/a-f';
import TempleAlcoveGL from './components/temple-alcove/g-l';
import TempleAlcoveMR from './components/temple-alcove/m-r';
import TempleAlcoveSX from './components/temple-alcove/s-x';

const routes = [
  {
    component: AlcoveOfTheSaintsABCD,
    label: 'Alcove of the Saints - ABCD',
    path: '/alcove-of-the-saints/abcd',
  },
  {
    component: AlcoveOfTheSaintsEFG,
    label: 'Alcove of the Saints - EFG',
    path: '/alcove-of-the-saints/efg',
  },
  {
    component: AlcoveOfTheSaintsHIJ,
    label: 'Alcove of the Saints - HIJ',
    path: '/alcove-of-the-saints/hij',
  },
  {
    component: AlcoveOfTheSaintsKLM,
    label: 'Alcove of the Saints - KLM',
    path: '/alcove-of-the-saints/klm',
  },
  {
    component: AlcoveOfTheSaintsNOP,
    label: 'Alcove of the Saints - NOP',
    path: '/alcove-of-the-saints/nop',
  },
  {
    component: AlcoveOfTheSaintsQRS,
    label: 'Alcove of the Saints - QRS',
    path: '/alcove-of-the-saints/qrs',
  },
  {
    component: AlcoveOfTheSaintsTUV,
    label: 'Alcove of the Saints - TUV',
    path: '/alcove-of-the-saints/tuv',
  },
  {
    component: AlcoveOfTheSaintsWX,
    label: 'Alcove of the Saints - WX',
    path: '/alcove-of-the-saints/wx',
  },
  {
    component: AlcoveOfTheSaintsYZAA,
    label: 'Alcove of the Saints - YZAA',
    path: '/alcove-of-the-saints/yzaa',
  },
  {
    component: AnnexAlcoveABCD,
    label: 'Annex Alcove - ABCD',
    path: '/annex-alcove/abcd',
  },
  {
    component: AnnexAlcoveEFG,
    label: 'Annex Alcove - EFG',
    path: '/annex-alcove/efg',
  },
  {
    component: CenterCorridor1,
    label: 'Center Corridor - 1',
    path: '/center-corridor/1',
  },
  {
    component: CenterCorridor2,
    label: 'Center Corridor - 2',
    path: '/center-corridor/2',
  },
  {
    component: CorridorANorth,
    label: 'Corridor A - North',
    path: '/corridor-a/north',
  },
  {
    component: CorridorASouth,
    label: 'Corridor A - South',
    path: '/corridor-a/south',
  },
  {
    component: CorridorBNorth,
    label: 'Corridor B - North',
    path: '/corridor-b/north',
  },
  {
    component: CorridorBSouth,
    label: 'Corridor B - South',
    path: '/corridor-b/south',
  },
  {
    component: CorridorCNorth,
    label: 'Corridor C - North',
    path: '/corridor-c/north',
  },
  {
    component: CorridorCSouth,
    label: 'Corridor C - South',
    path: '/corridor-c/south',
  },
  {
    component: CorridorDNorth,
    label: 'Corridor D - North',
    path: '/corridor-d/north',
  },
  {
    component: CorridorDSouth,
    label: 'Corridor D - South',
    path: '/corridor-d/south',
  },
  {
    component: CorridorENorth,
    label: 'Corridor E - North',
    path: '/corridor-e/north',
  },
  {
    component: CorridorESouth,
    label: 'Corridor E - South',
    path: '/corridor-e/south',
  },
  {
    component: CorridorFNorth,
    label: 'Corridor F - North',
    path: '/corridor-f/north',
  },
  {
    component: CorridorFSouth,
    label: 'Corridor F - South',
    path: '/corridor-f/south',
  },
  { component: GrandFoyer, label: 'Grand Foyer', path: '/grand-foyer' },
  {
    component: LambOfGodAlcove,
    label: 'Lamb of God Alcove',
    path: '/lamb-of-god-alcove',
  },
  {
    component: NorthCorridor1,
    label: 'North Corridor - 1',
    path: '/north-corridor/1',
  },
  {
    component: NorthCorridor2,
    label: 'North Corridor - 2',
    path: '/north-corridor/2',
  },
  {
    component: NorthCorridor3,
    label: 'North Corridor - 3',
    path: '/north-corridor/3',
  },
  {
    component: PresentationAlcoveAF,
    label: 'Presentation Alcove - A - F',
    path: '/presentation-alcove/a-f',
  },
  {
    component: PresentationAlcoveAAHH,
    label: 'Presentation Alcove - AA - HH',
    path: '/presentation-alcove/aa-hh',
  },
  {
    component: PresentationAlcoveGL,
    label: 'Presentation Alcove - G - L',
    path: '/presentation-alcove/g-l',
  },
  {
    component: PresentationAlcoveMR,
    label: 'Presentation Alcove - M - R',
    path: '/presentation-alcove/m-r',
  },
  {
    component: PresentationAlcoveSX,
    label: 'Presentation Alcove - S - X',
    path: '/presentation-alcove/s-x',
  },
  {
    component: PrivateChapelNorth,
    label: 'Private Chapel - North',
    path: '/private-chapel/north',
  },
  {
    component: PrivateChapelSouth,
    label: 'Private Chapel - South',
    path: '/private-chapel/south',
  },
  {
    component: PrivateRoomA,
    label: 'Private Room - A',
    path: '/private-room/a',
  },
  {
    component: PrivateRoomB,
    label: 'Private Room - B',
    path: '/private-room/b',
  },
  {
    component: PrivateRoomC,
    label: 'Private Room - C',
    path: '/private-room/c',
  },
  {
    component: PrivateRoomD,
    label: 'Private Room - D',
    path: '/private-room/d',
  },
  {
    component: PrivateRoomE,
    label: 'Private Room - E',
    path: '/private-room/e',
  },
  {
    component: PrivateRoomF,
    label: 'Private Room - F',
    path: '/private-room/f',
  },
  {
    component: PrivateRoomG,
    label: 'Private Room - G',
    path: '/private-room/g',
  },
  {
    component: PrivateRoomH,
    label: 'Private Room - H',
    path: '/private-room/h',
  },
  {
    component: SouthCorridor1,
    label: 'South Corridor - 1',
    path: '/south-corridor/1',
  },
  {
    component: SouthCorridor2,
    label: 'South Corridor - 2',
    path: '/south-corridor/2',
  },
  {
    component: SouthCorridor3,
    label: 'South Corridor - 3',
    path: '/south-corridor/3',
  },
  {
    component: StCeciliaAlcove,
    label: 'St. Cecilia Alcove',
    path: '/st-cecilia-alcove',
  },
  {
    component: StJohnAlcove,
    label: 'St. John Alcove',
    path: '/st-john-alcove',
  },
  {
    component: TempleAlcoveAF,
    label: 'Temple Alcove - A - F',
    path: '/temple-alcove/a-f',
  },
  {
    component: TempleAlcoveAAHH,
    label: 'Temple Alcove - AA - HH',
    path: '/temple-alcove/aa-hh',
  },
  {
    component: TempleAlcoveGL,
    label: 'Temple Alcove - G - L',
    path: '/temple-alcove/g-l',
  },
  {
    component: TempleAlcoveMR,
    label: 'Temple Alcove - M - R',
    path: '/temple-alcove/m-r',
  },
  {
    component: TempleAlcoveSX,
    label: 'Temple Alcove - S - X',
    path: '/temple-alcove/s-x',
  },
];

const styles = makeStyles((theme) => ({
  searchBar: {
    display: 'flex',
    paddingLeft: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(2),
    width: '25%',
  },
  searchBarInput: {
    flexGrow: 1,
  },
  returnButtonWrapper: {
    left: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(2),
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  titleWrapper: {
    bottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
}));

export default function App() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Paper className={classes.searchBar} elevation={2}>
        <InputBase
          className={classes.searchBarInput}
          margin="dense"
          placeholder="Search"
        />
        <IconButton>
          <Search />
        </IconButton>
      </Paper>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path}>
            <div style={{ width: '100%' }}>
              <Link className={classes.returnButtonWrapper} to="/">
                <IconButton>
                  <ArrowBack />
                </IconButton>
              </Link>
              {route.component()}
              <div className={classes.titleWrapper}>
                <Typography component="span" style={{ background: '#fff' }}>
                  {route.label}
                </Typography>
              </div>
            </div>
          </Route>
        ))}
        <Route path="/">
          <Mausoleum />
        </Route>
      </Switch>
    </div>
  );
}
