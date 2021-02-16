import TopBar from "./TopBar";
import * as ReactDom from "react-dom";

describe("TopBar component render", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDom.render(<TopBar />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly", () => {
    expect(container.querySelector("[data-test='logo']")).toBeInTheDocument();
  });
});
