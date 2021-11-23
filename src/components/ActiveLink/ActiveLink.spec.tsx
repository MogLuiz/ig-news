import { render } from "@testing-library/react";
import { ActiveLink } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

test("active link renders correctly", () => {
  const { getByText } = render(
    <ActiveLink href="/" activeClassname="active">
      <a>Home</a>
    </ActiveLink>
  );

  expect(getByText("Home")).toBeInTheDocument();
});

test("active link is receiving active class", () => {
  const { getByText } = render(
    <ActiveLink href="/" activeClassname="active">
      <a>Home</a>
    </ActiveLink>
  );

  expect(getByText("Home")).toHaveClass("active");
});