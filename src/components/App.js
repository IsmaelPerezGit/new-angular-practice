import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
    NavLink,
    Link
} from 'react-router-dom';

import SideNav from './sidenav/SideNav';
import Header from './header/Header';
import Home from './pages/home/Home';
import AllInvoices from './pages/all-invoices/AllInvoices';
import Accounting from './pages/accounting/Accounting';
import Audits from './pages/audits/Audits';
import Commissions from './pages/commissions/Commissions';
import CustomReports from './pages/custom-reports/CustomReports';
import NewDashboard from './pages/new-dashboard/NewDashboard';
import StorageManagement from './pages/storage-management/StorageManagement';
import Summaries from './pages/summaries/Summaries';
import ReportsPage from './pages/reports-page/ReportsPage';

const appRoutes = [
    {
        path: '/',
        className: 'icon-home',
        sidebarName: 'Home',
        navbarName: 'Home',
        icon: '',
        showSidebar: true,
        component: Home
    },
    {
        path: '/allInvoices',
        className: 'icon-home',
        sidebarName: 'All Invoices',
        navbarName: 'All Invoices',
        icon: '',
        showSidebar: true,
        component: AllInvoices
    },
    {
        path: '/accounting',
        className: 'font-icon-home',
        sidebarName: 'Accounting',
        navbarName: 'Accounting',
        icon: '',
        showSidebar: true,
        component: Accounting
    },
    {
        path: '/commissions',
        className: 'font-icon-home',
        sidebarName: 'Commissions',
        navbarName: 'Commissions',
        icon: '',
        showSidebar: true,
        component: Commissions
    },
    {
        path: '/storageManagement',
        className: 'font-icon-home',
        sidebarName: 'Storage Management',
        navbarName: 'Storage Management',
        icon: '',
        showSidebar: true,
        component: StorageManagement
    },
    {
        path: '/summaries',
        className: 'font-icon-home',
        sidebarName: 'Summaries',
        navbarName: 'Summaries',
        icon: '',
        showSidebar: true,
        component: Summaries
    },
    {
        path: '/audits',
        className: 'font-icon-home',
        sidebarName: 'Audits',
        navbarName: 'Audits',
        icon: '',
        showSidebar: true,
        component: Audits
    },
    {
        path: '/customReports',
        className: 'font-icon-home',
        sidebarName: 'Custom Reports',
        navbarName: 'Custom Reports',
        icon: '',
        showSidebar: true,
        component: CustomReports
    },
    {
        path: '/newDashboard',
        className: 'font-icon-home',
        sidebarName: 'New Dashboard',
        navbarName: 'New Dashboard',
        icon: '',
        showSidebar: true,
        component: NewDashboard
    }
];

const switchRoutes = (
    <Route>
        <Switch>
            {appRoutes.map(props => {
                if (props.redirect)
                    return (
                        <Redirect
                            from={props.path}
                            to={props.to}
                            key={props.navbarName}
                        />
                    );
                return (
                    <Route
                        path={props.path}
                        component={props.component}
                        key={props.navbarName}
                    />
                );
            })}
        </Switch>
    </Route>
);

class App extends Component {
    render() {
        const { ...rest } = this.props;
        return (
            <div>
                <Header />
                <Router>
                    <div>
                        <SideNav routes={appRoutes} {...rest} />
                        {switchRoutes}
                        <Route exact path='/' component={Home} />
                        <Route path='/allInvoices' component={AllInvoices} />
                        <Route path='/accounting' component={AllInvoices} />
                        <Route path='/commissions' component={AllInvoices} />
                        <Route
                            path='/storageManagement'
                            component={AllInvoices}
                        />
                        <Route path='/Summaries' component={AllInvoices} />
                        <Route path='/audits' component={AllInvoices} />
                        <Route path='/customeReports' component={AllInvoices} />
                        <Route path='/newDashboard' component={AllInvoices} />
                    </div>
                </Router>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default App;
