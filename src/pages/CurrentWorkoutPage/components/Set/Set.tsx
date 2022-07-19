import { FC } from 'react';
import { useAppDispatch } from 'hooks/useRedux';
import { ISet } from 'shared/types';
import { remove_set } from 'store/slices/listExercises';

import SetItem, { SetItemVariant } from '../SetItem/SetItem';
import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';

import './Set.scss';

interface SetProps extends ISet {
    index: number;
}

const Set: FC<SetProps> = ({ index, id, weight, amount, comment = null }) => {
    const dispatch = useAppDispatch();

    const removeSet = () => {
        dispatch(remove_set(id));
    };

    return (
        <div className="set">
            <div className="set__control">
                <div className="set__control_number">{index}</div>
                <button onClick={removeSet} className="set__control_icon">
                    <SvgGenerator id={variant.trash_can} />
                </button>
            </div>
            <div className="set__body">
                <SetItem variant={SetItemVariant.weight} value={weight} />
                <SetItem variant={SetItemVariant.amount} value={amount} />
                {comment !== null && (
                    <SetItem variant={SetItemVariant.comment} value={comment} />
                )}
            </div>
        </div>
    );
};
export default Set;
