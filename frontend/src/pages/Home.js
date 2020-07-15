import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import Table from "../Components/Table";
import { func } from 'prop-types';
import FormCreate from "../Components/FormCreate";
import SearchPost from "../Components/SearchPost";

const Home = (state) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(loading) {
            fetch('http://localhost:9000')
                .then(response => response.json())
                .then((json) => {
                    setLoading(false)
                    state.initState(json)
                });
        }
    });
    return (
        <Container>
            <SearchPost />
            <Table />
            <FormCreate />
        </Container>
    )

}

const mapStateToProps = (state) => ({
    ...state,
});

Home.propTypes = {
    initState: func.isRequired,
}

const mapDispatchProps = (dispatch) => ({
    initState: (target) => dispatch({ type: 'initState', target })
});

export default connect(
    mapStateToProps,
    mapDispatchProps,
)(Home);