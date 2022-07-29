import * as reduxHooks from '../../hooks';
import * as actions from '../../store/todoSlice';
import { render, screen, fireEvent } from '@testing-library/react';

import TodoItem from '../TodoItem';

jest.mock('../../hooks');

const mockedUseAppDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');

describe('TodoItem', () => {
    it('should render a TodoItem', () => {
        mockedUseAppDispatch.mockReturnValue(jest.fn());
        const { view } = render(<TodoItem id='123' title='Redux' completed={false} />);

        expect(view).toMatchSnapshot();
    });
    it('should dispatch actions', () => {
        const dispatch = jest.fn();
        mockedUseAppDispatch.mockReturnValue(dispatch);
        const mockedToggleStatus = jest.spyOn(actions, 'toggleStatus');
        const mockedRemoveTodo = jest.spyOn(actions, 'deleteTodo');
        const { view } = render(<TodoItem id='123' title='Redux' completed={false} />);

        fireEvent.click(screen.getByRole('checkbox'));

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockedToggleStatus).toHaveBeenCalledWith('123');
        fireEvent.click(screen.getByRole('button'));
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedRemoveTodo).toHaveBeenCalledWith('123');

    })
})