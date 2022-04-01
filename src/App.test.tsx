import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test("Render filters", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Find Cases/i);
  expect(linkElement).toBeInTheDocument();
});

test('loads case list items eventually', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Wait for page to update with query text
  const items = await screen.findAllByText(/Stolen/i)
  expect(items).toHaveLength(1)
})
