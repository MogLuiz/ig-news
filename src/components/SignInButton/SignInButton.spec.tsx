import { render, screen } from "@testing-library/react";
import SignInButton from ".";

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false];
    },
  };
});

describe("SignInButton component", () => {
  it("renders correctly when user is not authenticated", () => {
    render(<SignInButton />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });
});
