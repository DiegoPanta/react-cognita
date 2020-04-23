import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./http-response/NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppRouter() {
    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/course/:id" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default AppRouter;