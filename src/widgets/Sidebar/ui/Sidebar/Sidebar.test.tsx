import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
describe('Sidebar', () => {
  test('Test renderWithTranslation', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test Toggle', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  })
})