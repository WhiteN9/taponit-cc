import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("renders title", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const taponit = screen.getByText(/taponit/i);
  expect(taponit).toBeInTheDocument();
});
