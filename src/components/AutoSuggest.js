import React from 'react'
import Autosuggest from 'react-autosuggest';



export default class AutoSuggest extends React.Component {
    constructor(props) {
        super(props);
        
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.

        this.state = {
            value: '',
            suggestions: [],
            sugs: this.props.suggestions
        };
    }

    // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions = (value) => {
        // const inputValue = value.trim().toLowerCase();
        const inputValue = value;
        const inputLength = inputValue.length;
        const sugs = this.state.sugs; 
        return inputLength === 0 ? [] : sugs.filter(sugs => sugs.slice(0, inputLength) === inputValue
        );
    };

    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    getSuggestionValue = (suggestion) => (suggestion);

    // Use your imagination to render suggestions.
    renderSuggestion = (suggestion) => (
        <div>
          {suggestion}
        </div>
    );

    onChange = (event, {newValue}) => {
        this.props.getDestination(newValue);
        this.setState({
            value: newValue
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({value}) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const {value, suggestions} = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: '请输入目的地',
            value,
            onChange: this.onChange
        };

        // Finally, render it!
        return (
            <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
            />
        );
    }
}