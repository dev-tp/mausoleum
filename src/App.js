import { Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
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

const components = [
  {
    label: 'Alcove of the Saints - ABCD',
    path: '/alcove-of-the-saints/abcd',
    render: AlcoveOfTheSaintsABCD,
  },
  {
    label: 'Alcove of the Saints - EFG',
    path: '/alcove-of-the-saints/efg',
    render: AlcoveOfTheSaintsEFG,
  },
  {
    label: 'Alcove of the Saints - HIJ',
    path: '/alcove-of-the-saints/hij',
    render: AlcoveOfTheSaintsHIJ,
  },
  {
    label: 'Alcove of the Saints - KLM',
    path: '/alcove-of-the-saints/klm',
    render: AlcoveOfTheSaintsKLM,
  },
  {
    label: 'Alcove of the Saints - NOP',
    path: '/alcove-of-the-saints/nop',
    render: AlcoveOfTheSaintsNOP,
  },
  {
    label: 'Alcove of the Saints - QRS',
    path: '/alcove-of-the-saints/qrs',
    render: AlcoveOfTheSaintsQRS,
  },
  {
    label: 'Alcove of the Saints - TUV',
    path: '/alcove-of-the-saints/tuv',
    render: AlcoveOfTheSaintsTUV,
  },
  {
    label: 'Alcove of the Saints - WX',
    path: '/alcove-of-the-saints/wx',
    render: AlcoveOfTheSaintsWX,
  },
  {
    label: 'Alcove of the Saints - YZAA',
    path: '/alcove-of-the-saints/yzaa',
    render: AlcoveOfTheSaintsYZAA,
  },
  {
    label: 'Annex Alcove - ABCD',
    path: '/annex-alcove/abcd',
    render: AnnexAlcoveABCD,
  },
  {
    label: 'Annex Alcove - EFG',
    path: '/annex-alcove/efg',
    render: AnnexAlcoveEFG,
  },
  {
    label: 'Center Corridor - 1',
    path: '/center-corridor/1',
    render: CenterCorridor1,
  },
  {
    label: 'Center Corridor - 2',
    path: '/center-corridor/2',
    render: CenterCorridor2,
  },
  {
    label: 'Corridor A - North',
    path: '/corridor-a/north',
    render: CorridorANorth,
  },
  {
    label: 'Corridor A - South',
    path: '/corridor-a/south',
    render: CorridorASouth,
  },
  {
    label: 'Corridor B - North',
    path: '/corridor-b/north',
    render: CorridorBNorth,
  },
  {
    label: 'Corridor B - South',
    path: '/corridor-b/south',
    render: CorridorBSouth,
  },
  {
    label: 'Corridor C - North',
    path: '/corridor-c/north',
    render: CorridorCNorth,
  },
  {
    label: 'Corridor C - South',
    path: '/corridor-c/south',
    render: CorridorCSouth,
  },
  {
    label: 'Corridor D - North',
    path: '/corridor-d/north',
    render: CorridorDNorth,
  },
  {
    label: 'Corridor D - South',
    path: '/corridor-d/south',
    render: CorridorDSouth,
  },
  {
    label: 'Corridor E - North',
    path: '/corridor-e/north',
    render: CorridorENorth,
  },
  {
    label: 'Corridor E - South',
    path: '/corridor-e/south',
    render: CorridorESouth,
  },
  {
    label: 'Corridor F - North',
    path: '/corridor-f/north',
    render: CorridorFNorth,
  },
  {
    label: 'Corridor F - South',
    path: '/corridor-f/south',
    render: CorridorFSouth,
  },
  { label: 'Grand Foyer', path: '/grand-foyer', render: GrandFoyer },
  {
    label: 'Lamb of God Alcove',
    path: '/lamb-of-god-alcove',
    render: LambOfGodAlcove,
  },
  {
    label: 'North Corridor - 1',
    path: '/north-corridor/1',
    render: NorthCorridor1,
  },
  {
    label: 'North Corridor - 2',
    path: '/north-corridor/2',
    render: NorthCorridor2,
  },
  {
    label: 'North Corridor - 3',
    path: '/north-corridor/3',
    render: NorthCorridor3,
  },
  {
    label: 'Presentation Alcove - A - F',
    path: '/presentation-alcove/a-f',
    render: PresentationAlcoveAF,
  },
  {
    label: 'Presentation Alcove - AA - HH',
    path: '/presentation-alcove/aa-hh',
    render: PresentationAlcoveAAHH,
  },
  {
    label: 'Presentation Alcove - G - L',
    path: '/presentation-alcove/g-l',
    render: PresentationAlcoveGL,
  },
  {
    label: 'Presentation Alcove - M - R',
    path: '/presentation-alcove/m-r',
    render: PresentationAlcoveMR,
  },
  {
    label: 'Presentation Alcove - S - X',
    path: '/presentation-alcove/s-x',
    render: PresentationAlcoveSX,
  },
  {
    label: 'Private Chapel - North',
    path: '/private-chapel/north',
    render: PrivateChapelNorth,
  },
  {
    label: 'Private Chapel - South',
    path: '/private-chapel/south',
    render: PrivateChapelSouth,
  },
  {
    label: 'Private Room - A',
    path: '/private-room/a',
    render: PrivateRoomA,
  },
  {
    label: 'Private Room - B',
    path: '/private-room/b',
    render: PrivateRoomB,
  },
  {
    label: 'Private Room - C',
    path: '/private-room/c',
    render: PrivateRoomC,
  },
  {
    label: 'Private Room - D',
    path: '/private-room/d',
    render: PrivateRoomD,
  },
  {
    label: 'Private Room - E',
    path: '/private-room/e',
    render: PrivateRoomE,
  },
  {
    label: 'Private Room - F',
    path: '/private-room/f',
    render: PrivateRoomF,
  },
  {
    label: 'Private Room - G',
    path: '/private-room/g',
    render: PrivateRoomG,
  },
  {
    label: 'Private Room - H',
    path: '/private-room/h',
    render: PrivateRoomH,
  },
  {
    label: 'South Corridor - 1',
    path: '/south-corridor/1',
    render: SouthCorridor1,
  },
  {
    label: 'South Corridor - 2',
    path: '/south-corridor/2',
    render: SouthCorridor2,
  },
  {
    label: 'South Corridor - 3',
    path: '/south-corridor/3',
    render: SouthCorridor3,
  },
  {
    label: 'St. Cecilia Alcove',
    path: '/st-cecilia-alcove',
    render: StCeciliaAlcove,
  },
  {
    label: 'St. John Alcove',
    path: '/st-john-alcove',
    render: StJohnAlcove,
  },
  {
    label: 'Temple Alcove - A - F',
    path: '/temple-alcove/a-f',
    render: TempleAlcoveAF,
  },
  {
    label: 'Temple Alcove - AA - HH',
    path: '/temple-alcove/aa-hh',
    render: TempleAlcoveAAHH,
  },
  {
    label: 'Temple Alcove - G - L',
    path: '/temple-alcove/g-l',
    render: TempleAlcoveGL,
  },
  {
    label: 'Temple Alcove - M - R',
    path: '/temple-alcove/m-r',
    render: TempleAlcoveMR,
  },
  {
    label: 'Temple Alcove - S - X',
    path: '/temple-alcove/s-x',
    render: TempleAlcoveSX,
  },
];

const styles = makeStyles((theme) => ({
  addButton: {
    background: theme.palette.primary.main,
    bottom: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    position: 'absolute',
    right: theme.spacing(2),
  },
  searchBar: {
    display: 'flex',
    paddingLeft: theme.spacing(2),
    width: '25%',
  },
  searchBarInput: {
    flexGrow: 1,
  },
  searchBarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: theme.spacing(2),
    width: '100%',
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
      <div className={classes.searchBarWrapper}>
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
      </div>
      <Switch>
        {components.map((component, i) => (
          <Route key={i} path={component.path}>
            <div>
              <Link className={classes.returnButtonWrapper} to="/">
                <IconButton>
                  <ArrowBack />
                </IconButton>
              </Link>
              {component.render()}
              <div className={classes.titleWrapper}>
                <Typography component="span" style={{ background: '#fff' }}>
                  {component.label}
                </Typography>
              </div>
            </div>
            <Fab className={classes.addButton}>
              <Add />
            </Fab>
          </Route>
        ))}
        <Route path="/">
          <Mausoleum />
        </Route>
      </Switch>
    </div>
  );
}
