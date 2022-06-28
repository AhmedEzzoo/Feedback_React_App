import PropTypes from 'prop-types';

function Header({ text, bgColor, textcolor}) {

        const headerStyle = {
            backgroundColor : bgColor, 
            color : textcolor
        };


       return (
        <header style={ headerStyle }>
          <div className="container">
            <h2>{text}</h2>
          </div>
        </header>
       )
}

Header.propTypes = {
    text : PropTypes.string,
}

Header.defaultProps = {
    text : 'FeedBack UI',
    bgColor : '#000066',
    textcolor : 'red'

}

export default Header


