import React, { FC } from 'react';
import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import { checkLengthString } from 'shared/utils/checkLengthString';
import styles from './list-item.module.scss';

interface ListItemProps {
    status?: 'scheduled' | 'selected' | undefined;
    title: string;
    rightElement?: React.ReactNode;
    handleClick?: () => void;
}

const ListItem: FC<ListItemProps> = ({
    status,
    title,
    rightElement,
    handleClick,
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
        <div className={styles['list-item']} onClick={handleClick}>
            <div className={status ? styles.left : styles.empty}>
                {getIconStatus()}
            </div>
            <div className={styles.center}>{checkLengthString(title, 40)}</div>
            <div className={styles.right}>{rightElement}</div>
        </div>
    );
};
export default ListItem;
