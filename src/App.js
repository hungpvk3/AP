import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { PATH } from "./contants/PATH";
import { useStore } from "./context";
import Landing from "./Landing";
import Alert from "./components/alert";
// import PriveRoute from "./helpers/protected/protectedRoute";
// import PriveRoueAdmin from "./helpers/protected/protectedAdmin";
import Header from "./components/header";
import SubNavSite from "./components/subnav/SubNavSite";
import SubNavAdmin from "./components/subnav/SubNavAdmin";
import SubNavTrainner from "./components/subnav/SubNavTrainner";

import LoginPage from "./pages/site/login";
import HomePage from "./pages/site/home";
import ScorePage from "./pages/site/score";
import CategoryPage from "./pages/site/category";
import SchedulePage from "./pages/site/schedule";
import ProfilePage from "./pages/site/profile";
import ClassPage from "./pages/site/class";
import CoursePage from "./pages/site/course";

import AdminPage from "./pages/admin/Dasboard";
import ManagerUserPage from "./pages/admin/User";
import ManagerClassPage from "./pages/admin/Class";
import ManagerScore from "./pages/admin/Score";
import ManagerClassDetailPage from "./pages/admin/Class/components/DetailClass";
import TopicPage from "./pages/admin/Topic";

import ManagerCoursePage from "./pages/manager/Course";
import ManagerCategoryPage from "./pages/manager/category";
import Test from "./pages/admin/Class/components/test";

import ClassTrainnerPage from "./pages/trainner/class";
import ClassTrainnerDetailPage from "./pages/trainner/ClassDetail";
import ScheduleTrainnerPage from "./pages/trainner/schedule";

function App() {
    const {
        authState: { data },
    } = useStore();
    let SubNav;
    console.log(data);
    const path = useLocation().pathname.split("/")[1];
    if (path === "admin" || path === "manager") {
        SubNav = SubNavAdmin;
    } else if (path === "login") {
        SubNav = function () {
            return <div></div>;
        };
    } else if (path === "trainner") {
        SubNav = SubNavTrainner;
    } else {
        SubNav = SubNavSite;
    }

    return (
        <>
            <Route path="/test" component={Test} />
            <Route exact path="/" component={Landing} />
            <Route exact path={PATH.LOGIN} component={LoginPage} />
            <div>
                <Header />
            </div>
            {data ? (
                <div className="flex pt-20">
                    <div>
                        <SubNav />
                    </div>
                    <div className="content-right mr-12 ml-36">
                        <Switch>
                            <Route
                                exact
                                path={PATH.HOME}
                                component={HomePage}
                            />
                            <Route
                                exact
                                path={`${PATH.SCORE}/:idClass`}
                                component={ScorePage}
                            />
                            <Route
                                exact
                                path={PATH.CATEGORIES}
                                component={CategoryPage}
                            />
                            <Route
                                exact
                                path={PATH.PROFILE}
                                component={ProfilePage}
                            />
                            <Route
                                exact
                                path={PATH.MAJOR_COURSE}
                                component={CoursePage}
                            />
                            <Route
                                exact
                                path={PATH.COURSE_CLASS}
                                component={ClassPage}
                            />
                            <Route
                                exact
                                path={PATH.SCHEDULE}
                                component={SchedulePage}
                            />

                            {/* Admin */}
                            <Route
                                exact
                                path={PATH.ADMIN}
                                component={AdminPage}
                            />
                            <Route
                                exact
                                path={PATH.MANAGERUSER}
                                component={ManagerUserPage}
                            />
                            <Route
                                exact
                                path={`${PATH.ADMIN_CLASS}/:id`}
                                component={ManagerClassDetailPage}
                            />
                            <Route
                                exact
                                path={PATH.ADMIN_CLASS}
                                component={ManagerClassPage}
                            />
                            <Route
                                exact
                                path={PATH.TOPIC_ADMIN}
                                component={TopicPage}
                            />
                            <Route
                                exact
                                path={PATH.ADMIN_SCORE}
                                component={ManagerScore}
                            />
                            <Route
                                exact
                                path={PATH.ADMIN_PROFILE}
                                component={ProfilePage}
                            />

                            {/* Mamanger */}
                            <Route
                                exact
                                path={PATH.MANAGERCOURSE}
                                component={ManagerCoursePage}
                            />
                            <Route
                                exact
                                path={PATH.MANAGER_CATEGORY}
                                component={ManagerCategoryPage}
                            />

                            {/* Trainner */}
                            <Route
                                exact
                                path={PATH.TRAINNER}
                                component={ClassTrainnerPage}
                            />
                            <Route
                                exact
                                path={`${PATH.CLASS_TRAINNER}/:idClass`}
                                component={ClassTrainnerDetailPage}
                            />
                            <Route
                                exact
                                path={PATH.TRAINNER_PROFILE}
                                component={ProfilePage}
                            />
                            <Route
                                exact
                                path={`${PATH.SCHEDULE_TRAINNER}/:idClass`}
                                component={ScheduleTrainnerPage}
                            />
                        </Switch>
                        <Alert />
                    </div>
                </div>
            ) : path !== "login" && !localStorage.getItem("token") ? (
                <div className="error">
                    <div>Đăng nhập đi không cho xem chùa</div>
                </div>
            ) : localStorage.getItem("token") && path !== "login" ? (
                <div className="loader">
                    <div className="spinner"></div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default App;
