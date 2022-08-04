import styles from './my-input.module.scss';

const MyInput = ({ label, ...props }) => {
    return (
        <div className={styles.item}>
            <label>{label}</label>
            <input {...props} />
        </div>
    );
};
export default MyInput;

export const MyInputFocus = ({ label, inputRef, ...props }) => {
    return (
        <div className={styles.item}>
            <label>{label}</label>
            <input ref={inputRef} {...props} />
        </div>
    );
};
