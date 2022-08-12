import React, { FC } from 'react';
import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import { checkLengthString } from 'shared/utils/checkLengthString';
import styles from './list-item.module.scss';

interface ListItemProps {
    status?: 'scheduled' | 'selected' | undefined;
    title: string;
    rightElement?: React.ReactNode;
    handlerClick?: () => void;
}

const ListItem: FC<ListItemProps> = ({
    status,
    title,
    rightElement,
    handlerClick,
}) => {
    const getIconStatus = () => {
        switch (status) {
            case 'scheduled':
                return <SvgGenerator id={variant.check} />;
            case 'selected':
                return <SvgGenerator id={variant.check} />;
            default:
                return null;
        }
    };

    return (
        <div className={styles['list-item']} onClick={handlerClick}>
            <div className={status ? styles.left : styles.empty}>
                {getIconStatus()}
            </div>
            {/* <div className={styles.center}>{checkLengthString(title, 28)}</div> */}
            <div className={styles.center}>{title}</div>
            <div className={styles.right}>{rightElement}</div>
        </div>
    );
};
export default ListItem;
