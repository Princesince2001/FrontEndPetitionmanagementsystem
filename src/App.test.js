import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SignUp from "./components/signup.component";


jest.mock("axios");
jest.mock("react-router-dom");

describe("Sign in testcases", () => {
  test("Test firstname", () => {
    render(<SignUp />);
    const testcase1 = screen.getByTestId("Heading");
    expect(testcase1).toBeInTheDocument();
  });

  test("Firstname label", () => {
    render(<SignUp />);
    var label1 = screen.getByTestId("Textone");
    expect(label1).toBeInTheDocument();
    expect(label1).toHaveTextContent("FirstName");
  });

  test("Textfield-1", () => {
    render(<SignUp />);
    var text1 = screen.getByTestId("Textone");
    expect(text1).toBeInTheDocument();
  });

  test("Textfield-2", () => {
    render(<SignUp />);
    var text2 = screen.getByTestId("Texttwo");
    expect(text2).toBeInTheDocument();
  });

  test("Textfield-3", () => {
    render(<SignUp />);
    var text3 = screen.getByTestId("Textthree");
    expect(text3).toBeInTheDocument();
  });

  test("Textfield-4", () => {
    render(<SignUp />);
    var text4 = screen.getByTestId("Textfour");
    expect(text4).toBeInTheDocument();
  });

  test("Button", () => {
    render(<SignUp />);
    var button11 = screen.getByTestId("Buttontest");
    expect(button11).toBeInTheDocument();
  });

  test("Lastname label", () => {
    render(<SignUp />);
    var label2 = screen.getByTestId("Texttwo");
    expect(label2).toBeInTheDocument();
    expect(label2).toHaveTextContent("LastName");
  });

  test("Email Id", () => {
    render(<SignUp />);
    var label3 = screen.getByTestId("Textthree");
    expect(label3).toBeInTheDocument();
    expect(label3).toHaveTextContent("Email Id");
  });

  test("Ermsg",()=>{
    render(<SignUp/>);
    const Ermsg1=screen.getByTestId("tata");
    expect(Ermsg1).toBeInTheDocument();
    
  })

  test("Password", () => {
    render(<SignUp />);
    var label4 = screen.getByTestId("Textfour");
    expect(label4).toBeInTheDocument();
    expect(label4).toHaveTextContent("Password");
  });

  test("validates password", async () => {
    const { getByTestId } = render(<SignUp />);
    const FirstnameInput = getByTestId("Textone");
    const lastnameInput = getByTestId("Texttwo");
    const EmailnameInput = getByTestId("Textthree");
    const passwordInput = getByTestId("Textfour");
    const button = screen.getByTestId("Buttontest");

    const erroralert = screen.getByTestId("tata");

    fireEvent.change(FirstnameInput, { target: { value: "chinna" } });
    fireEvent.change(lastnameInput, { target: { value: "rathrinam" } });
    fireEvent.change(EmailnameInput, { target: { value: "Keevas@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "Keerthivas" } });

    fireEvent.click(button);

    expect(erroralert).toBeInTheDocument();
  });
});
