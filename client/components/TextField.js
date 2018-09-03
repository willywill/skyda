import React from 'react';
import { string } from 'prop-types';
import { Field, Label, Control, Input } from 'bloomer';

class TextField extends React.PureComponent {
    static propTypes = {
        label: string,
        placeholder: string,
        icon: string,
        type: string,
    };

    static defaultProps = {
        label: '',
        placeholder: undefined,
        icon: undefined,
        type: 'text',
    };

    render () {
        const { type, label, placeholder } = this.props;
        return (
            <Field>
                {label && <Label>{label}</Label>}
                <Control>
                    <Input type={type} isColor="primary" placeholder={placeholder} />
                </Control>
            </Field>
        );
    }
}

export default TextField;
