var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            <div className={'contactItem'}>
                <img className={'contactImage'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEwHtI3OSsxW6E26sKmxWOqa80RAiWfvJDk-IKS8ZxznhcVHfi'} />
                <p className={'contactLabel'}>
                    Imię: {this.props.item.firstName}
                </p>
                <p className={'contactLabel'}>
                    Nazwisko: {this.props.item.secondName}
                </p> 
                <a href={'mailto:' + this.props.item.email}>
                    {this.props.item.email}
                </a>
            </div>
        )
    },
});