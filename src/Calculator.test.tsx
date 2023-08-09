import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "./components/Calculator/Calculator";

describe("handleNumberClick event", () => {
  it('「0」ボタンをクリックすると、0が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "0" }));
    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });
  it('「1」ボタンをクリックすると、1が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "1" }));
    expect(screen.getByTestId("display")).toHaveTextContent("1");
  });
  it('「2」ボタンをクリックすると、2が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    expect(screen.getByTestId("display")).toHaveTextContent("2");
  });
  it('「3」ボタンをクリックすると、3が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "3" }));
    expect(screen.getByTestId("display")).toHaveTextContent("3");
  });
  it('「4」ボタンをクリックすると、4が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "4" }));
    expect(screen.getByTestId("display")).toHaveTextContent("4");
  });
  it('「5」ボタンをクリックすると、0が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "5" }));
    expect(screen.getByTestId("display")).toHaveTextContent("5");
  });
  it('「6」ボタンをクリックすると、6が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "6" }));
    expect(screen.getByTestId("display")).toHaveTextContent("6");
  });
  it('「7」ボタンをクリックすると、7が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "7" }));
    expect(screen.getByTestId("display")).toHaveTextContent("7");
  });
  it('「8」ボタンをクリックすると、8が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "8" }));
    expect(screen.getByTestId("display")).toHaveTextContent("8");
  });
  it('「9」ボタンをクリックすると、9が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "9" }));
    expect(screen.getByTestId("display")).toHaveTextContent("9");
  });
  it('「2」「00」ボタンをクリックすると、200が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "00" }));
    expect(screen.getByTestId("display")).toHaveTextContent("200");
  });
  it('「00」ボタンをクリックすると、0のまま"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "00" }));
    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });
  it('「2」「0」ボタンをクリックすると、20が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "0" }));
    expect(screen.getByTestId("display")).toHaveTextContent("20");
  });
  it('「0」ボタンをクリックすると、0のまま"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "0" }));
    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });
  it('「0」「.」「00」「2」ボタンをクリックすると、0.002が表示される"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "0" }));
    userEvent.click(screen.getByRole("button", { name: "." }));
    userEvent.click(screen.getByRole("button", { name: "00" }));
    userEvent.click(screen.getByRole("button", { name: "2" }));
    expect(screen.getByTestId("display")).toHaveTextContent("0.002");
  });
  it('足し算　1+2=3"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "1" }));
    userEvent.click(screen.getByRole("button", { name: "+" }));
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByTestId("display")).toHaveTextContent("3");
  });
  it('引き算　1-2=-1"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "1" }));
    userEvent.click(screen.getByRole("button", { name: "-" }));
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByTestId("display")).toHaveTextContent("-1");
  });
  it('割り算　1÷2=0.5"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "1" }));
    userEvent.click(screen.getByRole("button", { name: "÷" }));
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByTestId("display")).toHaveTextContent("0.5");
  });
  it('掛け算　1×2=2"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "1" }));
    userEvent.click(screen.getByRole("button", { name: "×" }));
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByTestId("display")).toHaveTextContent("2");
  });
  it('CA"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "1" }));
    userEvent.click(screen.getByRole("button", { name: "×" }));
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "=" }));
    userEvent.click(screen.getByRole("button", { name: "CA" }));

    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });
  it('CE1"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "1" }));
    userEvent.click(screen.getByRole("button", { name: "×" }));
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "=" }));
    userEvent.click(screen.getByRole("button", { name: "CE" }));

    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });
  it('CE2"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "1" }));
    userEvent.click(screen.getByRole("button", { name: "×" }));
    userEvent.click(screen.getByRole("button", { name: "CE" }));

    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });
  it('CE3"', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole("button", { name: "1" }));
    userEvent.click(screen.getByRole("button", { name: "×" }));
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "CE" }));

    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });
});
