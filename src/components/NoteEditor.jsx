var React = require('react');

require('./NoteEditor.css');
var Palette = require('./colorsPalette.js');

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            title: '',
            disabled: true
        };
    },
    handleTitleChange: function (event) {
        this.setState({title: event.target.value});
        this._updateButtonState();
    },
    handleTextChange: function(event) {
        this.setState({ text: event.target.value });
        this._updateButtonState();
    },
    handleNoteAdd: function() {
        var newNote = {
            text: this.state.text,
            color: Palette.getRandomColor(),
            id: Date.now(),
            title: this.state.title
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '', title: '', disabled: true });
    },
    clearFields: function(){
        this.setState({ text: '', title: '', disabled: true });
    },
    _updateButtonState: function () {
        var st = true;

        if (this.state.title !== '' && this.state.text !== '') {
            st = false;
        }
        this.setState({
            disabled: st
        })

    },
    render: function() {
        return (
            <div className="note-editor">
                <input type="text"
                       placeholder="Enter note title here..."
                       className="title"
                       value={this.state.title}
                       onChange={this.handleTitleChange}
                />
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className="buttons">
                    <button
                        className="clear-button"
                        onClick={this.clearFields}
                    >Clear</button>
                    <button
                        className="add-button"
                        disabled={this.state.disabled}
                        onClick={this.handleNoteAdd}
                    >Add</button>
                </div>
            </div>
        );
    }
});

module.exports = NoteEditor;
