import { render, screen, fireEvent } from "@testing-library/react";
import BlogList from "@/components/BlogList";
import { blog_data } from "@/assets/assets";
import React from "react";

// Mock the BlogItem component
jest.mock("../components/BlogItem", () => ({ id, title, category }) => (
  <div data-testid="blog-item">
    <h3>{title}</h3>
    <p>{category}</p>
  </div>
));

describe("BlogList Component", () => {
  test("renders all blog items initially", () => {
    render(<BlogList />);
    expect(screen.getAllByTestId("blog-item")).toHaveLength(blog_data.length);
  });

  test("filters blog items when clicking category buttons", () => {
    render(<BlogList />);
    fireEvent.click(screen.getByText("Technology"));
    const filteredBlogs = blog_data.filter(
      (blog) => blog.category === "Technology"
    );
    expect(screen.getAllByTestId("blog-item")).toHaveLength(
      filteredBlogs.length
    );
  });

  test('shows all blog items when clicking "All"', () => {
    render(<BlogList />);
    fireEvent.click(screen.getByText("Technology"));
    fireEvent.click(screen.getByText("All"));
    expect(screen.getAllByTestId("blog-item")).toHaveLength(blog_data.length);
  });
});
