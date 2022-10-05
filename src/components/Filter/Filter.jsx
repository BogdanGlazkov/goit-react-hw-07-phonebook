import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filter.slice';
import s from './Filter.module.css';

export const Filter = () => {
    const filter = useSelector(state => state.filter, shallowEqual);
    const dispatch = useDispatch();

    return (
        <label className='label'>
            Find contacts by name
            <input
                className={s.input}
                onChange={e => dispatch(changeFilter(e.target.value))}
                type="text"
                value={filter}
                placeholder="Start typing the name..."
            ></input>
        </label>
    )
};
