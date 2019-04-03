var React = require('react');
var TogleBtns = require('./toggleBtns.jsx');
var SearchResults = require('./searchResultString.jsx');
var ErrorBoundary = require('./errorBoundary.jsx');

class SearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            searchValue: "",
            searchParam: ""
        };
                           
        this.performSearch = this.performSearch.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
     }

    performSearch(){
        console.log(this.state.searchValue);
        this.props.onSearch(this.state.searchValue);
    }

    onTextChanged(e){
        this.setState({
            searchValue: e.target.value
          });
    }

    onChangeSearchParam(searchParam){
        this.setState({
            searchParam: searchParam
        });
        this.props.onChangeSearchParam(searchParam);
    }
               
    render() {
        return(
            <ErrorBoundary>         
                <h2>Find your movie</h2>
                    <input placeholder="Search" onChange={this.onTextChanged} className="search-field"/>
                    <button onClick={this.performSearch} className="">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                <div className = "under-search">
                    <div className="inline">
                        <span>Search by</span>
                        <TogleBtns titleLeft="Title" titleRight="Genre" className="inline" changeActive={this.onChangeSearchParam.bind(this)}/>
                    </div>
                </div>
                <div className="search-result">
                    <SearchResults moviesFound="3"/>
                </div>
            </ErrorBoundary>
            );
    }
}
 
module.exports = SearchContainer;