import styles from './my-button.module.scss';

const MyButton = function ({ children, ...props }) {
    return (
        <button {...props} className={styles.btn}>
            {children}
        </button>
    );
};
export default MyButton;
