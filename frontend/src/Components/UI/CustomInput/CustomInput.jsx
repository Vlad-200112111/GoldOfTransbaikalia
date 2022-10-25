import React from 'react';
import Form from 'react-bootstrap/Form';

function CustomInput({name, type, title, helper, typeInput = "input"}) {
    return (
        <div className="m-2">
            <Form.Floating>
                <Form.Control
                    name={name}
                    id={`${name}_id`}
                    type={type}
                    placeholder={title}
                    as={typeInput}
                />
                <label htmlFor={`${name}_id`}>{title}</label>
                <Form.Text className="text-muted">
                    {
                        helper
                    }
                </Form.Text>
            </Form.Floating>
        </div>
    );
}

export default CustomInput;