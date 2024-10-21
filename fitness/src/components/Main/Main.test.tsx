/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./Main";

describe("Main component", () => {
  it("renders correctly", () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
}); 