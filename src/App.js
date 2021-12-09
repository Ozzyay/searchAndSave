import "./App.css";
import Header from "./components/layout/Header";
import { Route, Routes } from "react-router-dom";
import React from "react";
import LoginForm from "./components/auth/LoginForm";
import { useSelector } from "react-redux";
import SearchBar from "./components/search/SearchBar";
import SearchResults from "./components/search/SearchResults";
import MyList from "./components/MyList/MyList";
function App() {
  const loginStatus = useSelector((state) => state.auth.isLoggedIn);
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" exact element={<SearchBar />} />
        <Route
          path="/search"
          exact
          element={
            <React.Fragment>
              <SearchBar /> <SearchResults />{" "}
            </React.Fragment>
          }
        />
        {!loginStatus && (
          <Route path="/login" element={<LoginForm></LoginForm>} />
        )}
        {loginStatus && <Route path="/mylist" exact element={<MyList />} />}
        {!loginStatus && (
          <Route path="/mylist" exact element={<p>Page Not Found</p>} />
        )}
        <Route path="/*" element={<p>Page Not Found</p>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
