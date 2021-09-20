import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';

import SVG from './SVG';

export default function Mausoleum() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);

  function openMenuDialog(items) {
    setItems(items);
    setIsOpen(true);
  }

  return (
    <>
      <SVG>
        <g style={{ display: 'none' }}>
          <path d="m1170 1000.1 375 45v-15h5v-5h50v-5h5v-5h10v-45h-10v-5h-5v-10h5v-5h10v-25h-10v-5h-5v-10h5v-5h5v5h9.9999v5h50v-10h5v-5h4.9999v-20h10v10h45v-5h5v-5h10v-60h-10v-5h-20v-5h15v-10h55v-40h-55v-5h-5v-465l-130 10v-5h-55v-40h20l15-110-735 70-20-150-200 35-30 140-365 35-45 465 20 5 20 95 95 10-2 17 37 3 2-16 70 6-4 32 58 7 4-34 14 2 1-11 36 3 5-51-32-3 2-13-14-1 0.99999-14-60-6-2 15-46-3 2-15-23-2 0.99999-11 66 6 1-5 9 1 0.99998-5 25 2.9639 1 9.0361 64 6 0.99998-9 10 1-0.99999 9 118.74 10 1.0188-9 12.834 1-1.1765 10 8 0.99998-2.4118 19.818-8-0.72728-1.6226 10.909-12.377-0.81815 2-16.182-58-5-1 16-9-0.99999-1 5h-5l-0.99998 5-18-0.99998-6 50 17 2v6h6v6h8l-1 17.8 56 6.72 3-17.52 12 0.99999-4.8679 43 62.868 7 4-39 8.6471 1.0001-1.647 15 60 5.9999 2-16 7.6471 1.0001 0.70591-6 6.647 0.99991 0.29405-4.9999 18.159 0.99991 5.5471-50-17.706-1.9999 0.70587-6.0001-6.4706 1.1e-4 0.47059-4.0001-8-0.99998 2.0002-19-60-5.4546-1.8824 18.455-9.1178-8e-5 2.0001-19.273-8.0001-0.72737 2.2642-20 7.736 0.7273 1.4117-9.7273 9.5882 0.54542-0.99988 10.091 349 30.364 23 57-17 5-11-31-18-1-1-7-15-2 0.9999-6-60-6-1.9999 7-15-2-1 8-19-0.99999 2-15-58-5-1 15-14.887-0.99998-0.79245 7-18.321-1-5.7736 51 18.321 1-0.90568 8 11.358 2-3 30.56 57 6.44 4-32 14 1-7 59 87 10 6.9999-55 66 6v-13l13-3z" />
        </g>
        <g>
          <path
            d="m187 738.06 3-32h22v8h16l1e-5 -10h43v10h15v-8h48v8h17v-10h41v44l-10-1-2 6-12-0.99999-2 16 23 2-3 24 29.155 2-1.1552 9 8 0.99999 1-8h2.2069l0.79309-8 68 6-1 8h7l-6 50.545-6-0.54546-0.59468 6-70.173-7 0.76725-10.364-7.6681-0.63636-0.49568 5-31.836-3-0.7931 8-75.569-8 0.69396-7-8.3319-0.63636-0.76724 6.6364-43.233-3.5454 6-48.455 42 3.7273-0.50432 5.2727h8.1724l3.6681-37 18.664 1.5455 2-16-13-1.1818 1-6.2727-38-3.4545v36.364h-69l-7-34z"
            onClick={() =>
              openMenuDialog([
                { label: 'Private Room - C', path: '/private-room/c' },
                { label: 'Private Room - D', path: '/private-room/d' },
              ])
            }
          />
          <Link to="/private-room/a">
            <path d="m218 704.06v-54h64v54z" />
          </Link>
          <Link to="/grand-foyer">
            <path d="m220 410.06v105h175v-105z" />
          </Link>
          <Link to="/private-chapel/south">
            <path d="m282 515.06v43h-50v52h60v10h28v-10h60v-52h-50v-43z" />
          </Link>
          <Link to="/private-chapel/north">
            <path d="m328 410.06h-46v-60h-54v-56h62v-10h30v10h60v58h-52z" />
          </Link>
          <Link to="/private-room/b">
            <path d="m344 704.06v-54h56v54z" />
          </Link>
          <path
            d="m392 714.06h18v-10l56-2h204l80 21 124 0.99999 80 18h118v12h88v-12h116v22h86v-6h370v48l-178 4e-5v5h-72l0.1289-5h-118.13v-6h-88v6h-116v-14h-86v6l-118-12-2 4.7791-12-1.0602-4 6.4177-50-3.8916-2-7.4738-12-1.0602v-3.7108l-122-12-2 4.755-14-0.75504-3 11-48-5-0.99999-11.076-16-1.4137-4e-5 -5.5101-120-10 3e-5 5.0442-16-1.4136-0.99999 6.7831-51-4.743v-6.6345l-13-1.1486-1-5.8876h-6l-2 6-14-1-1 5-51-4z"
            onClick={() =>
              openMenuDialog([
                { label: 'South Corridor - 1', path: '/south-corridor/1' },
                { label: 'South Corridor - 2', path: '/south-corridor/2' },
                { label: 'South Corridor - 3', path: '/south-corridor/3' },
              ])
            }
          />
          <path
            d="m395 434.06h9v-10h60v10h86v-10l116-1.9e-4v8.0002h85.983l0.0189-8h116v8h88v-8h116v8h88v-8h57.998v8h15.83l0.1697-14h-10v-30h58v6h74v-6h56v30h-8l0.019 14h15.982v-10h58v10h80.036l-0.038-10h56v78h-55.999v-8h-78v8h-60v-8h-16v14h10v30h-58v-6h-74v6h-58v-30h10l0.1633-14h-16.163v8h-60v-8h-86v8h-116v-8h-88v8h-114v-8h-88v10h-116v-10h-86v10h-60v-10h-9z"
            onClick={() =>
              openMenuDialog([
                { label: 'Center Corridor - 1', path: '/center-corridor/1' },
                { label: 'Center Corridor - 2', path: '/center-corridor/2' },
              ])
            }
          />
          <path
            d="m464 309.06v-43l16-2v-4l50-5v4l17-0.99998v6l65-6-4-24 60-8 2 8 98-10v-6l76-8 2 24 26-2 4e-5 -7 14-1.1765v-5.8235l50-4 0.99999 5 15-1v6l122-10v-6.7647l14-1.2353v-8l50-4 1.0001 7.5 15-1.5001v6l122-9.8235v-6.7647l16-1.4118-5e-4 -8 50-4 1 7 15-0.82348v5.8235l120-14v12h18v-22l30-4v-10l54-5-5.0001 37h-9l-4 48h-20v-4h-64v10l-118 2-82 18-122 2-82 18h-120l-82 18h-124l-80 14-120 1z"
            onClick={() =>
              openMenuDialog([
                { label: 'North Corridor - 1', path: '/north-corridor/1' },
                { label: 'North Corridor - 2', path: '/north-corridor/2' },
                { label: 'North Corridor - 3', path: '/north-corridor/3' },
              ])
            }
          />
          <Link to="/corridor-a/north">
            <path d="m464 408.06h8v11h8v15h53l-4e-5 -15h7v-11l8-1v-98h-84z" />
          </Link>
          <Link to="/corridor-a/south">
            <path d="m480 492.06h54v16h6v10h8v184h-82v-184h6v-10h8z" />
          </Link>
          <Link to="/corridor-b/north">
            <path d="m682 432.06h54v-14h8v-10h6v-114l-82 14v100h6v10h8z" />
          </Link>
          <Link to="/corridor-b/south">
            <path d="m682 492.06h54v14h8v12h6v205l-80-21v-184h4l4e-5 -12h8z" />
          </Link>
          <path
            d="m724 811.06 8.8824 1-1.8824 17.727-6-0.54546-1 5.8182 6 0.45456-0.99999 6.5454 6 0.7273 0.99999-6.7273 8 0.54546 0.76472-5.5455 62.235 7 0.99998 5 6 1-6 51h-6.1177l-2.2941 6-62.353-6 0.47059-4-8.1176-0.99999 0.70587-6-5.2941-1-0.99999 6h-7v6l7 0.99999-4 25-55-5 3.7647-32h6.1765l0.70586-6-6.1176-1 0.88236-7-6-0.99998-0.94118 8-3.4706-0.36359-0.70587 4.3637-65.294-6v-4l-6-0.99999 6-53 6 0.99999 1-5 65.685 5-0.68451 5.8182 4 0.18179-0.99998 6 6.353 1 0.64702-6.2727 6.1765 0.27288 0.82348-7-6-0.99999 1-10 9 0.99998 4.0588-25 36.882 4z"
            onClick={() =>
              openMenuDialog([
                { label: 'Private Room - E', path: '/private-room/e' },
                { label: 'Private Room - F', path: '/private-room/f' },
              ])
            }
          />
          <Link to="/st-cecilia-alcove">
            <path d="m742 225.06-2-19h8l2-64 26-4-4 28 56-6-12-84-34 6-2 26-28 4v-16l-70 12v14l-22 4-2-22-26 4-16 74 48-6-2-22 20-4 2 60h6l2 20z" />
          </Link>
          <Link to="/corridor-c/south">
            <path d="m884 492.06h56v16h8v8h6v226l-80-18v-206l4 4e-5v-10h6z" />
          </Link>
          <Link to="/corridor-c/north">
            <path d="m886 432.06h54v-14h8v-10h6v-132l-82 18-4e-5 114h6v10h8z" />
          </Link>
          <Link to="/corridor-d/north">
            <path d="m1088 432.06h54v-14h8v-10h6v-150l-82 18v132h6v10h7.9999z" />
          </Link>
          <Link to="/corridor-d/south">
            <path d="m1088 492.06h54v14h8v10h6v210h-6v14h-6v14h-56v-14h-6v-14h-5.9999v-210h5.9999v-10h6z" />
          </Link>
          <path
            d="m1089 792.06v27l10 0.99999 23 57-25 8-11-29-17-2 0.9999-8-15-1 1-4-52-6-2 6-14-2-0.99998 7-8-1-0.99998 10-6-1 0.99999-7-77-7-6 58 77 7 0.99998-10h6l-0.99998 10h8l-1 8 15 1-0.99998 5h-6l-4 49 61 5 6-49h-5l1-5 14 0.99998 1.0001-6 47 4 26-9 1.9999 5 7-4 28 73h29v-50h-10l1.0001-106h-35v-4h-13v-31z"
            onClick={() =>
              openMenuDialog([
                { label: 'Lamb of God Alcove', path: '/lamb-of-god-alcove' },
                { label: 'Private Room - G', path: '/private-room/g' },
                { label: 'Private Room - H', path: '/private-room/h' },
                { label: 'St. John Alcove', path: '/st-john-alcove' },
              ])
            }
          />
          <Link to="/presentation-alcove/s-x">
            <path d="m1282 835.06h-48v28h27v18h-27v27h48z" />
          </Link>
          <Link to="/presentation-alcove/m-r">
            <path d="m1282 926.06h-48v28l48 4e-5z" />
          </Link>
          <Link to="/presentation-alcove/m-r">
            <path d="m1282 972.06h-48v28h48z" />
          </Link>
          <Link to="/presentation-alcove/aa-hh">
            <path d="m1285 814.06h7v-14h56l-0.1236 14h7.1238v9h3v178h-13v6.0001h-51v-6.0001h-12v-179h3z" />
          </Link>
          <Link to="/corridor-e/north">
            <path d="m1298 394.06h42l-1e-4 -14h14v-12h6v-130l-82 18v110h6v14h14z" />
          </Link>
          <Link to="/corridor-e/south">
            <path d="m1300 530.06h38v14h16v12h6v186h-6v8h-8v14h-52v-12h-10v-16h-6v-180h6v-12h16z" />
          </Link>
          <Link to="/presentation-alcove/a-f">
            <path d="m1358 834.06h48v28h-27v18h27v27h-48z" />
          </Link>
          <Link to="/presentation-alcove/g-l">
            <path d="m1358 925.06h48v28l-48 3e-5z" />
          </Link>
          <Link to="/presentation-alcove/g-l">
            <path d="m1358 971.06h48v28h-48z" />
          </Link>
          <Link to="/temple-alcove/m-r">
            <path d="m1436 924.06h48v28h-48z" />
          </Link>
          <Link to="/temple-alcove/m-r">
            <path d="m1436 971.06h48v44h-48z" />
          </Link>
          <Link to="/temple-alcove/s-x">
            <path d="m1484 834.06h-48v28h26v18h-26v28l48 4e-5z" />
          </Link>
          <Link to="/corridor-f/north">
            <path d="m1496 432.06h44v-14h8v-12h5.9999v-62h-22v-52h8v-40h-8v-12h-8.0001v-14h-28v14h-7.9999v14h-8.0001l2.0001 152h6v12h7.9999z" />
          </Link>
          <Link to="/corridor-f/south">
            <path d="m1496 492.06h44v14h8v10h7v242h-73v-242h6v-10h7.9999z" />
          </Link>
          <Link to="/temple-alcove/aa-hh">
            <path d="m1498 811.06h42v13h12v196h-8v6h-52v-6h-8v-198h14z" />
          </Link>
          <Link to="/alcove-of-the-saints/abcd">
            <path d="m1532 304.06h18v-4h168l-1e-4 40h-19.946l-0.054 5h-49l-0.083-5h-82.917v-4h-16v-6h-18z" />
          </Link>
          <Link to="/temple-alcove/a-f">
            <path d="m1552 834.06h48v28h-26v18h26v28l-48 4e-5z" />
          </Link>
          <Link to="/temple-alcove/g-l">
            <path d="m1552 924.06h48v28h-48z" />
          </Link>
          <Link to="/temple-alcove/g-l">
            <path d="m1552 971.06h48v44h-48z" />
          </Link>
          <path
            d="m1630 732.36v-83.306h20v-4.5647h6v-8.4236h39v8.4236h5v5.7059h20v97.871h-4v10h-36v-10h-4v-16z"
            onClick={() =>
              openMenuDialog([
                {
                  label: 'Alcove of the Saints - WX',
                  path: '/alcove-of-the-saints/wx',
                },
                {
                  label: 'Alcove of the Saints - YZAA',
                  path: '/alcove-of-the-saints/yzaa',
                },
              ])
            }
          />
          <path
            d="m1655 345.06h39l-1e-4 8h5.0001v5h20v72h-20v5h-49v-5h-21v-73h20v-4h6.0001z"
            onClick={() =>
              openMenuDialog([
                {
                  label: 'Alcove of the Saints - EFG',
                  path: '/alcove-of-the-saints/efg',
                },
                {
                  label: 'Alcove of the Saints - HIJ',
                  path: '/alcove-of-the-saints/hij',
                },
              ])
            }
          />
          <path
            d="m1655 435.06h39v8.3882h5v5.6471h20v81.318h-20v5.6471h-49v-5.6471h-21v-82.447h20v-4.5177h6.0001z"
            onClick={() =>
              openMenuDialog([
                {
                  label: 'Alcove of the Saints - KLM',
                  path: '/alcove-of-the-saints/klm',
                },
                {
                  label: 'Alcove of the Saints - NOP',
                  path: '/alcove-of-the-saints/nop',
                },
              ])
            }
          />
          <path
            d="m1656 536.06h39v8.3529h5v5.5882h20v80.471h-20v5.5882h-49v-5.5882h-21v-81.588h20v-4.4706h6z"
            onClick={() =>
              openMenuDialog([
                {
                  label: 'Alcove of the Saints - QRS',
                  path: '/alcove-of-the-saints/qrs',
                },
                {
                  label: 'Alcove of the Saints - TUV',
                  path: '/alcove-of-the-saints/tuv',
                },
              ])
            }
          />
          <path
            d="m1680 806.06h37v11h4v5h16v57h-45v-18h-22v42h-49v-69h56v-18h3.0001z"
            onClick={() =>
              openMenuDialog([
                { label: 'Annex Alcove - ABCD', path: '/annex-alcove/abcd' },
                { label: 'Annex Alcove - EFG', path: '/annex-alcove/efg' },
              ])
            }
          />
        </g>
      </SVG>
      <Dialog fullWidth onClose={() => setIsOpen(false)} open={isOpen}>
        <List>
          {items.map((item) => (
            <ListItem button component={Link} key={item.path} to={item.path}>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
}
