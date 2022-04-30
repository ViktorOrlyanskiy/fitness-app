import '../styles/Set.scss';
import React from 'react';





function Set({ parameters }) {

    console.log(parameters)
    return (
        <div className="set">
            <div className="set__list-number">
                <div>{parameters.number}</div>
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



