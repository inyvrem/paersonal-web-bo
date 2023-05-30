import { render, screen } from "@testing-library/react"
import NewSectionPage from "@/app/(auth)/pages/[page]/all-sections/[section]/new/page"

describe("Test Suite - New Section Page", () => {
  it("render a new section page title & description", () => {
    render(<NewSectionPage />)
    const heading: HTMLElement = screen.getByRole("heading", {
      name: /New Section/i,
    })
    const description: HTMLElement = screen.getByText("Create new section")
    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
