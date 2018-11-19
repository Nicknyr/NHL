import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchRangersRoster} from './actions/fetchRangersRoster-action';

class RangersRoster extends Component  {

    componentDidMount = () => {
        this.props.fetchRangersRoster();
    }

    render(){
        const roster = Object.entries(this.props.rosterData.data).map((item, key) => {
            const jerseyNumber = item[1].jerseyNumber;
            const fullName = item[1].person.fullName;
            const id = item[1].person.id;
            const positionType = item[1].position.type;
            const positionAbbreviation = item[1].position.abbreviation;
            return (
                <div key={key}>
                    <p>{fullName}</p>
                    <p>{positionType}</p>
                    <p>{jerseyNumber}</p>
                    <p>{positionAbbreviation}</p>
                    <hr />
                </div>
            );
        })

        return (
            <div>{roster}</div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchRangersRoster: () => dispatch(fetchRangersRoster())
})

const mapStateToProps = state => ({
    rosterData: state.fetchRangersRosterReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(RangersRoster);