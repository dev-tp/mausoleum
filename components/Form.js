import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';
import TextField from '@material-ui/core/TextField';

import { AVAILABLE, OCCUPIED, ON_HOLD, RESERVED } from '../constants';
import { closeForm, saveFormData } from '../actions';

function Form({ dispatch, form }) {
  const [state, setState] = React.useState({});

  React.useEffect(() => {
    if (form.data !== null) {
      setState(form.data);
    }
  }, [form.data]);

  function change(event, field) {
    let { type, value } = event.target;

    if (field === 'has_engraving') {
      value = parseInt(value);
    }

    setState({
      ...state,
      [field]: type === 'date' && value === '' ? null : value,
    });
  }

  return (
    <Dialog fullWidth onClose={() => dispatch(closeForm())} open={form.open}>
      <DialogContent>
        <TextField
          fullWidth
          label="Status"
          margin="dense"
          onChange={(event) => change(event, 'status')}
          select
          value={state.status}
        >
          <MenuItem value={AVAILABLE}>Available</MenuItem>
          <MenuItem value={ON_HOLD}>On Hold</MenuItem>
          <MenuItem value={RESERVED}>Reserved</MenuItem>
          <MenuItem value={OCCUPIED}>Occupied</MenuItem>
        </TextField>
        <TextField
          fullWidth
          InputProps={{ disabled: true, readOnly: true }}
          label="Space Number"
          margin="dense"
          onChange={(event) => change(event, 'space_number')}
          value={state.space_number}
        />
        <TextField
          fullWidth
          label="Contract Number"
          margin="dense"
          onChange={(event) => change(event, 'contract_number')}
          value={state.contract_number}
        />
        <TextField
          fullWidth
          label="Patron"
          margin="dense"
          onChange={(event) => change(event, 'patron')}
          value={state.patron}
        />
        <TextField
          fullWidth
          label="Designee"
          margin="dense"
          onChange={(event) => change(event, 'designee')}
          value={state.designee}
        />
        <TextField
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Date of Birth"
          margin="dense"
          onChange={(event) => change(event, 'date_of_birth')}
          type="date"
          value={state.date_of_birth}
        />
        <TextField
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Date of Death"
          margin="dense"
          onChange={(event) => change(event, 'date_of_death')}
          type="date"
          value={state.date_of_death}
        />
        {state.status === OCCUPIED && (
          <>
            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              label="Date of Internment"
              margin="dense"
              onChange={(event) => change(event, 'date_of_internment')}
              type="date"
              value={state.date_of_internment}
            />
            <FormControl margin="dense">
              <FormLabel style={{ fontSize: '0.75rem' }}>
                Has Engraving
              </FormLabel>
              <RadioGroup
                onChange={(event) => change(event, 'has_engraving')}
                row
                value={state.has_engraving}
              >
                <FormControlLabel control={<Radio />} label="Yes" value={1} />
                <FormControlLabel control={<Radio />} label="No" value={0} />
              </RadioGroup>
            </FormControl>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeForm())}>Cancel</Button>
        <Button
          color="primary"
          onClick={() => dispatch(saveFormData(state.uri, state))}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect((state) => state)(Form);
