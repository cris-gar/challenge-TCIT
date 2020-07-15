import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'semantic-ui-react';
import { func } from 'prop-types';

const SearchPost = () => {
    const [searchName, setSearchName] = useState('');

    const handleChange = (e, { value }) => {
        setSearchName(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchName !== '') {
            document.querySelectorAll('tbody>tr').forEach((tr) => {
                if (tr.getAttribute('data-name') !== searchName) tr.style.display = "none";
                else tr.removeAttribute('style')
            });
        } else {
            document.querySelectorAll('tbody>tr').forEach((tr) => {
                tr.removeAttribute('style')
            });
        }
        setSearchName('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group inline widths='equal'>
                <Form.Field width={6}>
                    <Input
                        fluid
                        id='name'
                        placeholder='Filtro de Nombre'
                        name="name"
                        value={searchName}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field width={6}>
                </Form.Field>
                <Form.Field width={2}>
                    <label />
                    <Button type="submit">Buscar</Button>
                </Form.Field>

            </Form.Group>



        </Form>
    )
}

const mapStateToProps = (state) => ({
    ...state,
});

SearchPost.propTypes = {
    findPost: func.isRequired,
}

const mapDispatchProps = (dispatch) => ({
    findPost: (target) => dispatch({ type: 'findPost', target })
});

export default connect(
    mapStateToProps,
    mapDispatchProps,
)(SearchPost);

