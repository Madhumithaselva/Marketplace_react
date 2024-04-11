import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div class="container">
          <a class="navbar-brand" href="./logo.jpg">
            <img src="./logo.jpg" alt="Logo" ></img>
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sign Up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
