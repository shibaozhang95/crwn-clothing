import React from 'react';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';

import CartDropdown from './cart-dropdown.component';
import { Router } from 'react-router-dom';

describe('<CartDropdown ... />', () => {

  it('renders the component with cartitems', () => {
    const mockProps = {
      cartItems: [{
        id: 3,
        imageUrl: 'imageurl',
        name: 'jackests',
        price: 34.44,
        quantity: 1
      }],
      toggleCartHidden: jest.fn()
    }

    expect(shallow(<CartDropdown {...mockProps} />)).toMatchSnapshot();
  })

  it('renders the component with no cartitems', () => {
    const mockProps = {
      cartItems: [],
      toggleCartHidden: jest.fn()
    }

    expect(shallow(<CartDropdown {...mockProps} />)).toMatchSnapshot();
  })

  it('works when clicking checkout button', () => {
    let history = createMemoryHistory();
    const checkoutRoute = '/checkout';
    const mockProps = {
      cartItems: [],
      toggleCartHidden: jest.fn()
    }

    let wrapper = shallow(
      <Router history={history}>
        <CartDropdown {...mockProps} />)
      </Router>
    )

    wrapper.find('#checkout-btn').simulate('click');
    expect(mockProps.toggleCartHidden.mock.calls.length).toEqual(1);
    expect(history.location).toBe(checkoutRoute);
    
  })
})