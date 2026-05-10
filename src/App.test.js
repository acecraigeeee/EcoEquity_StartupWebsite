import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders main app elements and removed info sections are not present", () => {
  render(<App />);

  expect(screen.getAllByText("VerdeVersity").length).toBeGreaterThan(0);
  expect(
    screen.getByText("Grow Food. Build Community. Earn Sustainably.")
  ).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Search something...")).toBeInTheDocument();

  expect(screen.queryByText("What is VerdeVersity?")).not.toBeInTheDocument();
  expect(
    screen.queryByText("Students, urban households, and small-scale farmers.")
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText("Food security, extra income, and eco-friendly living.")
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText("Building greener communities and sustainable ecosystems.")
  ).not.toBeInTheDocument();
  expect(screen.queryByText("Our Team")).not.toBeInTheDocument();
  expect(
    screen.queryByText(
      "Passionate individuals dedicated to innovation and sustainability."
    )
  ).not.toBeInTheDocument();
});

test("category popup opens and closes", () => {
  render(<App />);

  fireEvent.click(screen.getAllByText("Explore")[0]);
  expect(
    screen.getByText(
      /Access guided lessons on urban farming, crop planning, composting/
    )
  ).toBeInTheDocument();

  fireEvent.click(screen.getByLabelText("Close category details popup"));
  expect(
    screen.queryByText(
      /Access guided lessons on urban farming, crop planning, composting/
    )
  ).not.toBeInTheDocument();
});
