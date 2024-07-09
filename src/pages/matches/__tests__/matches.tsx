import { render, act } from "@testing-library/react";
import Matches from "../index";
describe("rendering article", () => {
    test ('Articles component', () => {
        act(() => {
            render(<Matches/>);
        })
    })
})