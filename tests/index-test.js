import expect from 'expect'
import React from 'react'
import { render, ReactDOM, unmountComponentAtNode } from 'react-dom'
import { mount } from "enzyme";
import Component from 'src/'
import ReactButton from '../src/button'
describe('Component', () => {
  let node
  let props;
  let mountedReactPagination;
  const ractPagination = () => {
    if (!mountedReactPagination) {
      mountedReactPagination = mount(
        <Component {...props} />
      );
    }
    return mountedReactPagination;
  }

  beforeEach(() => {
    node = document.createElement('div')

    props = {
      total: undefined,
      limit: undefined,
    };
    mountedReactPagination = undefined;
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })
  it("always renders a div", () => {
    const divs = ractPagination().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it('check pagination controllers', () => {
    render(<Component />, node, () => {
      expect(node.innerHTML).toContain('Prev');
      expect(node.innerHTML).toContain('Next');

    })
  });

  it("contains everything else that gets rendered", () => {
    const divs = ractPagination().find("div");
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(ractPagination().children());
  });

  it("always renders a `ReactButton`", () => {
    expect(ractPagination().find(ReactButton).length).toBe(3);
  });

  it("it sends props it needs", () => {
    const reactButton = ractPagination().find(ReactButton).first();
    expect(Object.keys(reactButton.props()).length).toBe(4);
  });


});
