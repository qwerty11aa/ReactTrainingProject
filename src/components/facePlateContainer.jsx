var React = require('react');
var MovieFacePlate = require('./movieFacePlate.jsx');
var ErrorBoundary = require('./errorBoundary.jsx');

class FacePlateContainer extends React.PureComponent {
    constructor(props){
        super(props);

    }

    render() {
            return (
                <ErrorBoundary>
                    <MovieFacePlate movies={this.props.movies} onChangeSorting={this.props.onChangeSorting} onChangeSelected={this.props.onChangeSelected}/>
                </ErrorBoundary>
            )
        }
}

module.exports = FacePlateContainer;