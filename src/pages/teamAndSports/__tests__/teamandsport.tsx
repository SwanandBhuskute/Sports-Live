import { render, act } from "@testing-library/react";
import TeamandSport from "../index";
describe("rendering article", () => {
    test ('Articles component', () => {
        act(() => {
            render(<TeamandSport />);
        })
    })
})