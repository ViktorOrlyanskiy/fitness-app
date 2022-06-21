import './Stopwatch.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimeAction } from 'store/stopwatchReducer';




// сделать мемоизацию ?
function Stopwatch({ }) {

    const dispatch = useDispatch();
    const { time, stopwatchOn, isVisible } = useSelector(state => state.stopwatch)


    useEffect(() => {
        let interval = null;

        if (stopwatchOn) {
            interval = setInterval(() => {
                dispatch(setTimeAction())
            }, 1000)
        }
        else {
            clearInterval(interval)
        }

        return () => clearInterval(interval);
    }, [stopwatchOn])


    const displayTime = (num) => {
        const hour = Math.floor(num / 3600);
        const min = Math.floor((num - (hour * 3600)) / 60);
        const sec = num % 60;

        const addZero = num => ('0' + num).slice(-2);

        if (num < 3600) {
            return `${addZero(min)}:${(addZero(sec))}`
        }
        else {
            return `${hour}:${addZero(min)}:${addZero(sec)}`
        }
    }


    return (
        <div className={isVisible ? 'stopwatch' : 'stopwatch hidden'}>
            <div className="stopwatch__time">{displayTime(time)}</div>
        </div>
    )
};
export default Stopwatch;