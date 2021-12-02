import { screen, render } from "@testing-library/react";
import Compendium from "./Compendium";

it("should render a list of Pokemon", () => {
  render(<Compendium />);
  const loading = screen.getByText(/Loading .../i);
  expect(loading).toBeInTheDocument();
});
