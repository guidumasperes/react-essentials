import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

//With React Testing Library a query is going to reach out to some sort of element and return somo
//information about it
test("renders an h1", () => {
    const {getByText} = render(<App />);
    const h1 = getByText(/Hello React Testing Library/);
    expect(h1).toHaveTextContent("Hello React Testing Library");
});