import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { arrayOf, shape, string, number } from 'prop-types';
import { urlApi } from "../config";

const Body = ({ posts, deletePost }) => {
    const removePost = (e,) => {
        e.preventDefault()
        const { target } = e;
        let postId = target.getAttribute('data-post-id');
        fetch(urlApi + postId, {
            method: 'DELETE',
        }).then((response) => response.json())
            .then((post) => {
                deletePost(post)
            })
    }

    return (<Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Descripción</Table.HeaderCell>
                <Table.HeaderCell>Acción</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                posts.map((post) => <Table.Row key={post.id} data-name={post.name}>
                    <Table.Cell >
                        {post.name}
                    </Table.Cell>
                    <Table.Cell>{post.description}</Table.Cell>
                    <Table.Cell onClick={removePost} data-post-id={post.id}>Eliminar</Table.Cell>
                </Table.Row>)
            }
        </Table.Body>
    </Table>)
}

const mapStateToProps = (state) => ({
    posts: state,
});

Body.propTypes = {
    posts: arrayOf(
        shape({
            id: number,
            name: string,
            description: string
        })
    ).isRequired
}

const mapDispatchProps = (dispatch) => ({
    deletePost: (target) => dispatch({ type: 'deletePost', target })
});

export default connect(
    mapStateToProps,
    mapDispatchProps,
)(Body);