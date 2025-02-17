import PropTypes from "prop-types";

const Alert = ({ alert }) => {
  return (
    alert && (
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{alert.type.toUpperCase()}:</strong> {alert.msg}
      </div>
    )
  );
};


Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }),
};

export default Alert;
