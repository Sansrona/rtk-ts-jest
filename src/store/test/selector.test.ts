import { selectTodos } from "../selector";

describe("redux selector", () => {
    it("should select stored todos", () => {
        const todos = [{id: "1", title: "redux", completed: false}];
        const result = selectTodos({todos});

        expect(result).toEqual(todos);
    })
})