import React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import { Container } from 'semantic-ui-react'
import Table from "../Components/Table";
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
            <Table />
        </Container>
    )

}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchProps = (dispatch) => ({
    initState: (target) => dispatch({ type: 'initState', target })
});

export default connect(
    mapStateToProps,
    mapDispatchProps,
)(Home);