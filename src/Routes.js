import React from 'react';
import { Switch } from 'react-router-dom';

// route layout
import { AuthRouteWithLayout, RouteWithLayout } from './components/RouteWithLayout';
// layout
import { Dashboard, Main } from './layouts';
// components
import {
  // client
  ClientCulture,
  ClientDicionary,
  ClientDashboard,
  ClientLocation,
  ClientListeningAid,
  // management
  SignIn,
  Case,
  AddCase,
  EditCase,
  HighRiskArea,
  AddHighRiskArea,
  EditHighRiskArea,
  Rule,
  AddRule,
  EditRule,
  Institution,
  AddInstitution,
  EditInstitution,
} from './views';

const Routes = () => {
  return (
    <Switch>
      {/* -------------------------- Clients ---------------------------------- */}
      {/* SignIn */}
      <RouteWithLayout component={SignIn} exact layout={Main} path="/signin" />
      {/* Home Dashboard */}
      <RouteWithLayout component={ClientDashboard} exact layout={Main} path="/" />
      <RouteWithLayout component={ClientDashboard} exact layout={Main} path="/home" />
      {/* Cases */}
      <RouteWithLayout component={ClientCulture} exact layout={Main} path="/cultures" />
      {/* Rules */}
      <RouteWithLayout component={ClientDicionary} exact layout={Main} path="/dictionarys" />
      {/* HighRiskArea */}
      <RouteWithLayout component={ClientLocation} exact layout={Main} path="/locations" />
      {/* Institutions */}
      <RouteWithLayout component={ClientListeningAid} exact layout={Main} path="/listeningaids" />
      {/* -------------------------- Management---------------------------------- */}
      {/* Manage Cases */}
      <AuthRouteWithLayout component={Case} exact layout={Dashboard} path="/management/cases" />
      <AuthRouteWithLayout
        component={AddCase}
        exact
        layout={Dashboard}
        path="/management/cases/add"
      />
      <AuthRouteWithLayout
        component={EditCase}
        exact
        layout={Dashboard}
        path="/management/cases/edit/:id"
      />
      {/* Manage Rules */}
      <AuthRouteWithLayout component={Rule} exact layout={Dashboard} path="/management/rules" />
      <AuthRouteWithLayout
        component={AddRule}
        exact
        layout={Dashboard}
        path="/management/rules/add"
      />
      <AuthRouteWithLayout
        component={EditRule}
        exact
        layout={Dashboard}
        path="/management/rules/edit/:id"
      />
      {/* Manage HighRiskArea */}
      <AuthRouteWithLayout
        component={HighRiskArea}
        exact
        layout={Dashboard}
        path="/management/areas"
      />
      <AuthRouteWithLayout
        component={AddHighRiskArea}
        exact
        layout={Dashboard}
        path="/management/areas/add"
      />
      <AuthRouteWithLayout
        component={EditHighRiskArea}
        exact
        layout={Dashboard}
        path="/management/areas/edit/:id"
      />
      {/* Manage Institutions */}
      <AuthRouteWithLayout
        component={Institution}
        exact
        layout={Dashboard}
        path="/management/institutions"
      />
      <AuthRouteWithLayout
        component={AddInstitution}
        exact
        layout={Dashboard}
        path="/management/institutions/add"
      />
      <AuthRouteWithLayout
        component={EditInstitution}
        exact
        layout={Dashboard}
        path="/management/institutions/edit/:id"
      />
    </Switch>
  );
};

export default Routes;
