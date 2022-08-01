import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useRedux';
import { remove_set, copy_set } from 'store/reducers/listExercises';
import { save_service_set } from 'store/reducers/editSet';

import TouchWrapper from 'shared/components/TouchWrapper';
import ButtonBack from 'shared/components/ButtonBack';
import SetItem, { SetItemVariant } from '../SetItem';
import { URL } from 'shared/constants/URL';
import { ISet } from 'shared/types';
import './set.scss';

interface SetProps extends ISet {
    index: number;
}

const Set: FC<SetProps> = ({ index, id, weight, amount, comment }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handlerBtnCopy = () => {
        dispatch(copy_set(id));
    };

    const handlerBtnEdit = () => {
        dispatch(save_service_set({ id, weight, amount, comment }));
        navigate(URL.add_set);
    };

    const handlerBtnDelete = () => {
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
                    handlerCopy={handlerBtnCopy}
                    handlerEdit={handlerBtnEdit}
                    handlerDelete={handlerBtnDelete}
                />
            }
        />
    );
};
export default Set;
