import React from 'react';
import Form from 'react-bootstrap/Form';


function CustomInput({
                         name,
                         type,
                         title,
                         helper,
                         typeInput = "input",
                         required = false,
                         disabled = false ,
                         ...restProps
}) {
    return (
        <div className="mb-2 mt-2">
            <Form.Floating>
                <Form.Control
                    {...restProps}
                    required={required}
                    name={name}
                    id={`${name}_id`}
                    type={type}
                    placeholder={title}
                    as={typeInput}
                />
                <Form.Text className="text-muted">
                    {
                        helper
                    }
                </Form.Text>
                <label htmlFor={`${name}_id`}>{title}</label>

            </Form.Floating>
        </div>
    );
}

export default CustomInput;