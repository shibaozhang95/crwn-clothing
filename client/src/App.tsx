import * as serviceWorker from './serviceWorker';
import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import Header from "./components/header/header.component";
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { User } from './redux/user/user.types';
import { RootState } from './redux/root-reducer';
import { Dispatch } from 'redux';

import "./global.styles.scss"

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const ChecktoutPage = lazy(() => import('./pages/checkout/checkout.component'));

type StateProps = {
  currentUser: User | null
}

type DispatchProps = {
  checkUserSession: () => void
}

type Props = StateProps & DispatchProps

const App = ({ checkUserSession, currentUser }: Props) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
          
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={ChecktoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

serviceWorker.register();
