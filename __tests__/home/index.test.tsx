import { render, screen } from "@testing-library/react"
import HomePage from "@/app/(auth)/page"

describe("Test Suite - Home Page", () => {
  it("render a home page heading", () => {
    render(<HomePage />)
    const heading: HTMLElement = screen.getByRole("heading", {
      name: /Home/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
