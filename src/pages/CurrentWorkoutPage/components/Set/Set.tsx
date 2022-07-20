import { FC } from 'react';
import { useAppDispatch } from 'hooks/useRedux';
import { ISet } from 'shared/types';
import { remove_set } from 'store/slices/listExercises';

import SetItem, { SetItemVariant } from '../SetItem/SetItem';
import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';

import './Set.scss';
import TouchWrapper from 'shared/components/TouchWrapper';

interface SetProps extends ISet {
    index: number;
}

const Set: FC<SetProps> = ({ index, id, weight, amount, comment = null }) => {
    const dispatch = useAppDispatch();

    const removeSet = () => {
        dispatch(remove_set(id));
    };

    return (
        <TouchWrapper
            id={id}
            offset={213}
            front={
                <div className="set">
                    <div className="set__control">
                        <div className="set__control_number">{index}</div>
                    </div>
                    <div className="set__body">
                        <SetItem
                            variant={SetItemVariant.weight}
                            value={weight}
                        />
                        <SetItem
                            variant={SetItemVariant.amount}
                            value={amount}
                        />
                        {comment && (
                            <SetItem
                                variant={SetItemVariant.comment}
                                value={comment}
                            />
                        )}
                    </div>
                </div>
            }
            back={
                <div className="set__btns btn-set">
                    <div className="btn-set__copy">
                        <SvgGenerator id={variant.copy} />
                    </div>
                    <div className="btn-set__edit">
                        <SvgGenerator id={variant.pencil} />
                    </div>
                    <div className="btn-set__delete" onClick={removeSet}>
                        <SvgGenerator id={variant.trash_can} />
                    </div>
                </div>
            }
        />
    );
};
export default Set;
