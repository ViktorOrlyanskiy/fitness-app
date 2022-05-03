import '../styles/Set.scss';
import React from 'react';
import { SvgGeneration } from '../../../components/UI/SvgGeneration/SvgGeneration';
import { useDispatch, useSelector } from 'react-redux';
import { removeSetAction } from '../../../store/parametersSetsReducer';




function Set({ parameters }) {

    const dispatch = useDispatch();
    const parametersSets = useSelector(state => state.parametersSets.parametersSets)

    const removeSet = () => {
        dispatch(removeSetAction(parameters.id))
    }


    return (
        <div className="set">
            <div className="set__list">
                <div className="set__list_number">{parameters.number}</div>
                <div onClick={removeSet} className='set__list_icon'>
                    <SvgGeneration id={'trash-can'} />
                </div>
            </div>
            <div className="set__body">
                <div className="set__weight set-item">
                    <div className="set__text">Вес</div>
                    <div className="set__number">{parameters.weight}</div>
                </div>
                <div className="set__amount set-item">
                    <div className="set__text">Повторения</div>
                    <div className="set__number">{parameters.amount}</div>
                </div>
                <div className="set__comment set-item">
                    <div className="set__text">{parameters.comment}</div>
                </div>
            </div>
        </div>
    );
}

export default Set;



