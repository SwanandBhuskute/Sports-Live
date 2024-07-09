import { render, act } from "@testing-library/react";
import Articles from "../index";
describe("rendering article", () => {
    test ('Articles component', () => {
        act(() => {
            render(<Articles/>);
        })
    })
})