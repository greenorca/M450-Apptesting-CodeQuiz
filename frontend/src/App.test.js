import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

/* Mocked Components */
jest.mock("./Home", () => () => <div>Mocked_Home</div>);
jest.mock("./Rules", () => () => <div>Mocked_Rules</div>);
jest.mock("./AboutUs", () => () => <div>Mocked_AboutUs</div>);
jest.mock("./NotFound", () => () => <div>Mocked_NotFound</div>);
jest.mock("./GlobalNavigation", () => () => <div>Mocked_GlobalNavigation</div>);
jest.mock("./GameSession", () => () => <div>Mocked_GameSession</div>);
jest.mock("./QuestionList", () => () => <div>Mocked_QuestionList</div>);

describe("Routing tests for App.js", () => {
    test("Default route should render Home component", () => {
      // Arrange

      // Act
      render(
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      );

      // Assert
      expect(screen.getByText("Mocked_Home"))
      expect(screen.getByText("Mocked_GlobalNavigation"))
    });

    test("Rules route should render Rule component", () => {
      // Arrange

      // Act
      render(
        <MemoryRouter initialEntries={["/rules"]}>
          <App/>
        </MemoryRouter>
      );

      // Assert
      expect(screen.getByText("Mocked_Rules"))
      expect(screen.getByText("Mocked_GlobalNavigation"))
    });

    test("AboutUs route should render AboutUs component", () => {
      // Arrange

      // Act
      render(
        <MemoryRouter initialEntries={["/aboutus"]}>
          <App/>
        </MemoryRouter>
      );

      // Assert
      expect(screen.getByText("Mocked_AboutUs"))
      expect(screen.getByText("Mocked_GlobalNavigation"))
    });

    test("Quiz route should render GameSession component", () => {
      // Arrange

      // Act
      render(
        <MemoryRouter initialEntries={["/quiz"]}>
          <App/>
        </MemoryRouter>
      );

      // Assert
      expect(screen.getByText("Mocked_GameSession"))
      expect(screen.getByText("Mocked_GlobalNavigation"))
    });

    test("Unkown path should trigger NotFound component", () => {
      // Arrange

      // Act
      render(
        <MemoryRouter initialEntries={["/1337"]}>
          <App/>
        </MemoryRouter>
      );

      // Assert
      expect(screen.getByText("Mocked_NotFound"))
    });

    test("questionslist path should render QuestionList component", () => {
      // Arrange

      // Act
      render(
        <MemoryRouter initialEntries={["/questionslist"]}>
          <App/>
        </MemoryRouter>
      );

      // Assert
      expect(screen.getByText("Mocked_QuestionList"))
    });
});