import React from 'react';
import { string } from 'prop-types';
import { Field, Label, Control, Input } from 'bloomer';

class TextField extends React.PureComponent {
    static propTypes = {
        label: string,
        placeholder: string,
    };

    static defaultProps = {
        label: '',
        placeholder: undefined,
    };

    render () {
        const { label, placeholder } = this.props;
        return (
            <Field>
                {label && <Label>{label}</Label>}
                <Control>
                    <Input type="text" isColor="primary" placeholder={placeholder} />
                </Control>
            </Field>
        );
    }
}

export default TextField;
