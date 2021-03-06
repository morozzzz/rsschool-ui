import ReduxFormInputText from 'components/ReduxFormInputText';
import ReduxFormPhoneInput from 'components/ReduxFormPhoneInput';
import ReduxFormSelect from 'components/ReduxFormSelect';
import * as React from 'react';
import { FormGroup, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { CITIES } from '../../reference-data';
import { emailFormatter, emailParser } from './parsers-formatters';

class ContactsForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="0" className="row">
                <FormGroup className="col-md-6">
                    <Label>City</Label>
                    <Field name="city" component={ReduxFormSelect}>
                        <option value="">(Empty)</option>
                        {CITIES.map(city => <option key={city.id}>{city.name}</option>)}
                    </Field>
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label className="field-required">Phone (in the form 8-XXX-XXX-XX-XX)</Label>
                    <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">8-</InputGroupAddon>
                        <Field
                            name="phone"
                            className="form-control"
                            pattern="(\+?\d[- .]*){9,13}"
                            placeholder="111-111-11-11"
                            component={ReduxFormPhoneInput}
                            type="tel"
                        />
                    </InputGroup>
                </FormGroup>
            </div>,
            <div key="1" className="row">
                <FormGroup className="col-md-12">
                    <Label>Email</Label>
                    <Field
                        className="form-control"
                        component={ReduxFormInputText}
                        format={emailFormatter}
                        name="emails"
                        parse={emailParser}
                        placeholder="Email"
                    />
                </FormGroup>
            </div>,
        ];
    }
}

export default ContactsForm;
