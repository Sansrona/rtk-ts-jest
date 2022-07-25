import todoReducer, { addTodo, toggleComplete, removeTodo } from "../todoSlice";

describe("todo slice", () => {
  const initialState = { list: [], error: null, loading: false };
  it("should return default state when passed an empty action", () => {
    const result = todoReducer(undefined, { type: "" });

    expect(result.list).toEqual([]);
  });
  it("should return add new todo item with 'addTodo' action", () => {
    const result = todoReducer(initialState, {
      type: addTodo.type,
      payload: "Hello",
    });

    expect(result.list[0].title).toEqual("Hello");
  });
  it("should toggle todo item status with 'toggleTodo' action", () => {
    const init = {
      list: [{ title: "Hello", id: "123", completed: false }],
      error: null,
      loading: false,
    };
    const action = { type: toggleComplete.type, payload: "123" };

    const result = todoReducer(init, action);

    expect(result.list[0].completed).toBe(true);
  });
  it("should remove todo item status with 'removeTodo' action", () => {
    const init = {
      list: [{ title: "Hello", id: "123", completed: false }],
      error: null,
      loading: false,
    };
    const action = {type: removeTodo.type, payload: "123"};

    const result = todoReducer(init, action);
    expect(result.list).toEqual([]);
  });
});
