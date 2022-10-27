import React from 'react';
import Form from 'react-bootstrap/Form';

function CustomInputFile({name, onChange}) {
    return (
        <div className="mb-2 mt-2">
            <Form.Group controlId={`${name}_id`}>
                <Form.Control type="file" onChange={onChange}/>
            </Form.Group>
        </div>
    );
}

export default CustomInputFile;
