import * as reduxHooks from '../../hooks'
import { render } from '@testing-library/react';

import TodoList from "../TodoList";

jest.mock('../../hooks');

const todos = [
    {id: '123', title: 'React', completed: false},
    {id: '124', title: 'Redux', completed: false},
]

describe('TodoList', () => {
    it('should render a TodoList', () => {
        jest.spyOn(reduxHooks, 'useAppSelector').mockReturnValue([]); 
        const { view } = render(<TodoList />);


        expect(view).toMatchSnapshot();
    });
    it('should render a TodoList with items', () => {
        jest.spyOn(reduxHooks, 'useAppSelector').mockReturnValue(todos); 
        const { view } = render(<TodoList />);


        expect(view).toMatchSnapshot();
    })
})
