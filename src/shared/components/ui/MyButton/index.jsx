import styles from './my-button.module.scss';

const MyButton = function ({ children, className = '', ...props }) {
    return (
        <button {...props} className={`${styles.btn} ${className}`}>
            {children}
        </button>
    );
};
export default MyButton;
