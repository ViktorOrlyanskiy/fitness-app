import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useRedux';
import { remove_set, copy_set } from 'store/reducers/listExercises';
import { save_service_set } from 'store/reducers/editSet';
import { set_offset } from 'store/reducers/touchWrapper';
import { URL } from 'shared/constants/URL';
import { ISet } from 'shared/models';

import TouchWrapper from 'shared/components/TouchWrapper';
import ButtonsBack from 'shared/components/ButtonsBack';
import SetItem from '../SetItem';
import './set.scss';

interface SetProps extends ISet {
    index: number;
}

const Set: FC<SetProps> = ({ index, id, weight, amount, comment }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleBtnCopy = () => {
        dispatch(copy_set(id));
        dispatch(set_offset(0));
    };

    const handleBtnEdit = () => {
        dispatch(save_service_set({ id, weight, amount, comment }));
        dispatch(set_offset(0));
        navigate(URL.form_add_set);
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
                        <SetItem variant="weight" value={weight} />
                        <SetItem variant="amount" value={amount} />
                        {comment && (
                            <SetItem variant="comment" value={comment} />
                        )}
                    </div>
                </div>
            }
            back={
                <ButtonsBack
                    isSet
                    handleCopy={handleBtnCopy}
                    handleEdit={handleBtnEdit}
                    handleDelete={handleBtnDelete}
                />
            }
        />
    );
};
export default Set;
