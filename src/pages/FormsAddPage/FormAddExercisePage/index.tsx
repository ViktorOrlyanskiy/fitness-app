import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { set_is_fetch_groups_exercises } from 'store/reducers/fetch';
import { _update_group_exercises } from 'store/actions';
import { IExerciseStorage, IGroupExercises } from 'shared/models';
import { URL } from 'shared/constants/URL';
import { copyObject } from 'shared/helpers/copyObject';

import Header from 'shared/components/Header';
import { MySelect } from 'shared/components/ui/MySelect';
import { MyRadioButtons } from 'pages/FormsAddPage/FormAddExercisePage/components/MyRadioButtons';
import schema from './localSchemaValidation';
import '../form-add.scss';

interface InputsForm {
    group: string;
    type: string;
    name: string;
}

const FormAddExercise: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { user, exercisesStorage } = useAppSelectors();

    const optionsRadio = [
        { label: 'Базовое', value: 'basic' },
        { label: 'Вспомогательное', value: 'auxiliary' },
        { label: 'Корректирующее', value: 'corrective' },
    ];

    const optionsSelect = [
        { label: 'Бедра', value: 'Бедра' },
        { label: 'Бицепс', value: 'Бицепс' },
        { label: 'Голень', value: 'Голень' },
        { label: 'Грудь', value: 'Грудь' },
        { label: 'Дельты', value: 'Дельты' },
        { label: 'Предплечье', value: 'Предплечье' },
        { label: 'Пресс', value: 'Пресс' },
        { label: 'Спина', value: 'Спина' },
        { label: 'Трицепс', value: 'Трицепс' },
    ];

    const {
        register,
        reset,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<InputsForm>({
        mode: 'onSubmit',
        defaultValues: { group: '', type: 'corrective', name: '' },
        resolver: yupResolver(schema),
    });

    const changeValueRadio = (value: string) => {
        setValue('type', value);
    };

    const onSubmit = (data: any) => {
        // получает группу чтобы ее перезаписать в firestore
        let newId = 0;
        const group: IGroupExercises = copyObject(
            exercisesStorage.find(
                (group: IGroupExercises) => group.name === data.group
            )
        );
        // получает самый большой id упражения
        group?.list.forEach((exercise: IExerciseStorage) => {
            if (newId < exercise.id) {
                newId = exercise.id;
            }
        });

        const newExercise: IExerciseStorage = {
            id: ++newId,
            type: data.type,
            name: data.name,
        };
        group?.list.push(newExercise);

        if (user.uid && group) {
            dispatch(_update_group_exercises({ userId: user.uid, group }));
            dispatch(set_is_fetch_groups_exercises(true));

            reset();
            navigate(URL.exercises_storage);
        }
    };

    return (
        <div className="form-add-page">
            <Header
                previousPage={URL.exercises_storage}
                btnRight="check"
                handleBtnRight={handleSubmit(onSubmit)}
                children={'Новое упражение'}
            />
            <div className="page-container">
                <form className="form" autoComplete="off">
                    <div className="form__field add-exercise">
                        <label>Мышечная группа</label>
                        <MySelect
                            defaultValue={''}
                            options={optionsSelect}
                            onChange={(value) => setValue('group', value)}
                        />
                        {errors?.group && (
                            <p className="form__error">
                                {errors.group?.message}
                            </p>
                        )}
                    </div>
                    <div className="form__field add-exercise">
                        <label>Тип упражнения</label>
                        <MyRadioButtons
                            defaultValue={'corrective'}
                            options={optionsRadio}
                            onChange={changeValueRadio}
                        />
                    </div>
                    <div className="form__field add-exercise">
                        <label htmlFor="name">Название упражнения</label>
                        <input
                            id="name"
                            placeholder="напр. Приседания"
                            {...register('name')}
                        />
                        {errors?.name && (
                            <p className="form__error">
                                {errors.name?.message}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
export default FormAddExercise;
