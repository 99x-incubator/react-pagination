import expect from 'expect'
import React from 'react'
import { render, ReactDOM, unmountComponentAtNode } from 'react-dom'
import { mount } from "enzyme";
import Component from 'src/'

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
});
