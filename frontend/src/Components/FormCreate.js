import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react'
import { func } from 'prop-types';
import { urlApi } from "../config";

const FormCreate = ({ createPost }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e, { name, value }) => {
        if (name === "name") setName(value);
        if (name === "description") setDescription(value);
    }

    const handleSubmit = (e) => {
        if (name !== '' && description !== '') {
            fetch(urlApi, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, description })
            }).then(response => response.json())
                .then(post => {
                    createPost(post);
                    setName('');
                    setDescription('');
                })


        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Input
                    fluid
                    id='name'
                    label='Nombre'
                    placeholder='Nombre'
                    required
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                <Form.Input
                    fluid
                    id='description'
                    name="description"
                    label='Descripción'
                    placeholder='Descripción'
                    required
                    value={description}
                    onChange={handleChange}
                />
                <Button type="submit">Crear</Button>
            </Form.Group>
        </Form>
    )
}

const mapStateToProps = (state) => ({
    ...state,
});

FormCreate.propTypes = {
    createPost: func.isRequired,
}

const mapDispatchProps = (dispatch) => ({
    createPost: (post) => dispatch({ type: 'createPost', post })
});

export default connect(
    mapStateToProps,
    mapDispatchProps
)(FormCreate);