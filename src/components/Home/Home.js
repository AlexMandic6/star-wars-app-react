import PropTypes from 'prop-types';

export default function Home(props) {
    const {time} = props;

    return (
      <div>
        <h2>Welcome to the Home page</h2>
        <p>The time is: {new Date(time).toLocaleTimeString()}</p>
        {/* <p>The component is {active? 'active' : 'NOT active'}</p> */}
      </div>
    );
}

Home.defaultProps = {
    time: Date.now(),
    // active: true
};
Home.propTypes = {
    time: PropTypes.number,
    // active: PropTypes.bool.isRequired
};