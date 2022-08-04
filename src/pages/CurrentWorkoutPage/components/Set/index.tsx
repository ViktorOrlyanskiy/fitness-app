import { FC } from 'react';
import { useAppDispatch } from 'hooks/useRedux';
import { remove_set, copy_set } from 'store/reducers/listExercises';
import { save_service_set } from 'store/reducers/editSet';
import { set_offset } from 'store/reducers/touchWrapper';

import TouchWrapper from 'shared/components/TouchWrapper';
import ButtonBack from 'shared/components/ButtonBack';
import SetItem, { SetItemVariant } from '../SetItem';
import { ISet } from 'shared/types';
import './set.scss';

interface SetProps extends ISet {
    index: number;
    setOpenModal: (arg1: boolean) => void;
}

const Set: FC<SetProps> = ({
    index,
    id,
    weight,
    amount,
    comment,
    setOpenModal,
}) => {
    const dispatch = useAppDispatch();

    const handleBtnCopy = () => {
        dispatch(copy_set(id));
        dispatch(set_offset(0));
    };

    const handleBtnEdit = () => {
        dispatch(save_service_set({ id, weight, amount, comment }));
        setOpenModal(true);
        dispatch(set_offset(0));
    };

    const handleBtnDelete = () => {
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
                <ButtonBack
                    isSet
                    handlerCopy={handleBtnCopy}
                    handlerEdit={handleBtnEdit}
                    handlerDelete={handleBtnDelete}
                />
            }
        />
    );
};
export default Set;
