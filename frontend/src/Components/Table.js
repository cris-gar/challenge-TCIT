import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { arrayOf, shape, string, number } from 'prop-types';

const Body = ({ posts }) => {
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
                posts.map((post) => <Table.Row key={post.id}>
                    <Table.Cell >
                        {post.name}
                    </Table.Cell>
                    <Table.Cell>{post.description}</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
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

export default connect(
    mapStateToProps,
)(Body);