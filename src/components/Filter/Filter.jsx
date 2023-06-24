import { Input, Span, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getVisibleContact } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
    return (
        <FilterLabel>
            <Span>Find contacts by Name</Span>
            <Input type="text" onChange={e => dispatch(getVisibleContact(e.target.value))} />
        </FilterLabel>
    )
  }


