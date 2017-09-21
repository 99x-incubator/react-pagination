import React, { Component } from 'react'
import './style.css';
import ReactButton from './button';

export default class ReactPagination extends Component {
  limit = 20;
  total = 0;
  pageCount = 0;
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      show: false,
      totalPages: [],
      current: 0,
      next: 0,
      pagination: {
        first: [],
        second: [],
        third: []
      }
    };
    this.selectPage = this.selectPage.bind(this);

  }
  componentDidMount() {
    this.limit = this.props.limit;
    this.total = this.props.total;
    let state = this.state;
    if (this.total && this.total > 0) {

      this.pageCount = Math.ceil(this.total / this.limit);
      if (this.limit > this.total) {
        this.pageCount = 1;
      }
      for (let i = 1; i < this.pageCount + 1; i++) {
        state.totalPages.push(i);
      }

      state.last = state.totalPages[state.totalPages.length - 1];
      state.current = (state.current) ? state.current : 1;
      state.next = (state.current === state.last) ? 0 : state.current + 1;

      this.generatePagination();
      state.show = true;
      state.loading = false;
      this.setState(state);
    }

  }

  generatePagination() {
    const pageCount = this.pageCount;
    const pages = this.state.totalPages;
    const current = this.state.current;
    let state = this.state;
    if ((current !== 0) && (current < (pageCount + 1))) {
      if (pageCount < 6) {
        state.pagination.first = pages;
        state.pagination.second = [];
        state.pagination.third = [];
      }

      if (pageCount === 6) {
        if ((pageCount - current) < 2) {
          state.pagination.first = pages.slice(0, 1); // first
          state.pagination.second = pages.slice((pages.length - 3), pages.length); // last4
          state.pagination.third = [];
        } else {
          if (current < 3) {
            state.pagination.first = pages.slice(0, 3); // first3
            state.pagination.second = pages.slice((pages.length - 1), pages.length); // last
            state.pagination.third = [];
          }

          if (current === 3) {
            state.pagination.first = pages.slice(0, 4); // first4
            state.pagination.second = pages.slice((pages.length - 1), pages.length); // last
            state.pagination.third = [];
          }

          if (current > 3) {
            state.pagination.first = pages.slice(0, 1); // first
            state.pagination.second = pages.slice((pages.length - 4), pages.length); // last4
            state.pagination.third = [];
          }
        }
      }

      if (pageCount > 6) {
        if (pageCount - current < 2) {
          state.pagination.first = pages.slice(0, 1); // first
          state.pagination.second = pages.slice((pages.length - 3), pages.length); // last4
          state.pagination.third = [];
        } else if (pageCount - current === 2) {
          state.pagination.first = pages.slice(0, 1); // first
          state.pagination.second = pages.slice((pages.length - 4), pages.length); // last4
          state.pagination.third = [];
        } else {
          if (current < 3) {
            state.pagination.first = pages.slice(0, 3); // first3
            state.pagination.second = pages.slice((pages.length - 1), pages.length); // last
            state.pagination.third = [];
          }

          if (current === 3) {
            state.pagination.first = pages.slice(0, 4); // first4
            state.pagination.second = pages.slice((pages.length - 1), pages.length); // last
            state.pagination.third = [];
          }

          if (current > 3) {
            state.pagination.first = pages.slice(0, 1); // first
            state.pagination.second = pages.slice((current - 2), (current + 1)); // i-1, i, i+1
            state.pagination.third = pages.slice((pages.length - 1), pages.length); // last
          }
        }
      }

    }
    this.setState(state);
  }

  selectPage(page) {
    this.props.returnSelectedPage(page);
    let state = this.state;
    state.current = page;
    if (page === state.last) {
      state.next = 0;
    } else {
      state.next = state.current + 1;
    }
    this.generatePagination();
    this.setState(state);
  }
  goPrev() {
    if (this.state.current > 0) {
      this.selectPage(this.state.current - 1);
    }
  }

  goNext() {

    if (this.pageCount > this.state.current) {
      this.selectPage(this.state.current + 1);
    }
  }

  render() {

    let activeButtonColor = '#ccc'
    let buttonColor = '#fff';



    return (
      <div>
        <div style={{ 'display': this.state.show ? 'block' : 'none' }}>
          <div>
            <div style={{ 'display': this.state.loading ? 'block' : 'none' }}>Loading...</div>
            <div style={{ 'display': !this.state.loading ? 'block' : 'none' }}>
              <nav>

                <ul className="pagination">

                  <li
                    style={{ 'display': this.state.current > 1 ? 'block' : 'none' }}
                    onClick={this.goPrev.bind(this)}
                    className="prev"
                  >
                    <a>Prev</a>
                  </li>

                  <ReactButton
                    selectPage={this.selectPage}
                    section="first"
                    current={this.state.current}
                    pagination={this.state.pagination} />

                  <li
                    style={{ 'display': this.state.pagination.second.length > 0 ? 'block' : 'none' }}
                    className="empty"
                  >
                    <a>...</a>
                  </li>

                  <ReactButton
                    selectPage={this.selectPage}
                    section="second"
                    current={this.state.current}
                    pagination={this.state.pagination} />

                  <li
                    style={{ 'display': this.state.pagination.third.length > 0 ? 'block' : 'none' }}
                    className="empty"
                  >
                    <a>...</a>
                  </li>

                  <ReactButton
                    selectPage={this.selectPage}
                    section="third"
                    current={this.state.current}
                    pagination={this.state.pagination} />

                  <li
                    style={{ 'display': this.state.next != 0 ? 'block' : 'none' }}
                    onClick={this.goNext.bind(this)}
                    className="next"
                  >
                    <span>Next</span>
                  </li>

                </ul>

              </nav>
            </div>
          </div>
        </div>

      </div >
    )
  }
}
