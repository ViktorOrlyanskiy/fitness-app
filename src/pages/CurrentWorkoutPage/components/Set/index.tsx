import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useRedux';
import { ISet } from 'shared/types';
import { remove_set, copy_set } from 'store/slices/listExercises';
import { save_service_set } from 'store/slices/editSet';

import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import TouchWrapper from 'shared/components/TouchWrapper';
import { URL } from 'shared/constants/URL';

import SetItem, { SetItemVariant } from '../SetItem';
import './set.scss';

interface SetProps extends ISet {
    index: number;
}

const Set: FC<SetProps> = ({ index, id, weight, amount, comment }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const copySet = () => {
        dispatch(copy_set(id));
    };

    const editSet = () => {
        dispatch(save_service_set({ id, weight, amount, comment }));
        navigate(URL.add_set);
    };

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
                    <div className="btn-set__copy" onClick={copySet}>
                        <SvgGenerator id={variant.copy} />
                    </div>
                    <div className="btn-set__edit" onClick={editSet}>
                        <SvgGenerator id={variant.pencil_light} />
                    </div>
                    <div className="btn-set__delete" onClick={removeSet}>
                        <SvgGenerator id={variant.trash_xmart} />
                    </div>
                </div>
            }
        />
    );
};
export default Set;
