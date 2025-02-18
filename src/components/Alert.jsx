import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import "../components/Alert.css"; // Import CSS

const Alert = ({ alert }) => {
  return (
    <div className="alert-container">
      <AnimatePresence>
        {alert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`alert alert-${alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{alert.type.toUpperCase()}:</strong> {alert.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }),
};

export default Alert;
