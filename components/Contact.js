var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return ( < div className = { 'contactItem' } >
            < img className = { 'contactImage' } src = { 'https://www.vippng.com/png/detail/369-3697163_this-icon-represents-a-contact-card-contact-icon.png' }/> < p className = { 'contactLabel' } > Imię + { this.props.item.firstName } </p>  
            <p className={'contactLabel'} > Imię + {this.props.item.firstName} </p> 
            <p className = { 'contactLabel' } > Nazwisko + { this.props.item.lastName } </p> 
            < a className = { 'contactEmail' } href = { 'mailto:' + this.props.item.email }> {this.props.item.email} </a> 
            </div> 
        )
    },
});