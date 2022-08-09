import { FC } from 'react';
import './set-item.scss';

interface SetItemProps {
    variant: 'weight' | 'amount' | 'comment';
    value: number | string;
}

const SetItem: FC<SetItemProps> = ({ variant, value }) => {
    switch (variant) {
        case 'weight':
            return (
                <div className="set__weight set-item">
                    <div className="set__text">Вес</div>
                    <div className="set__number">{value}</div>
                </div>
            );
        case 'amount':
            return (
                <div className="set__amount set-item">
                    <div className="set__text">Повторения</div>
                    <div className="set__number">{value}</div>
                </div>
            );
        case 'comment':
            return (
                <div className="set__comment set-item">
                    <div className="set__text">{value}</div>
                </div>
            );

        default:
            return null;
    }
};
export default SetItem;
