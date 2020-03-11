import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import {Logo} from './logo';

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: 0,
            marginTop: 0,
            maxWidth: '400px'
          }}
        >
          <Link
            style={{
              display: 'block',
              boxShadow: `none`,
              textDecoration: `none`,
              width: '230px',
              height: '127px',
              color: `inherit`,
              margin: `0 1em`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 874.2 338.2' xml:space='preserve'%3E%3Cstyle%3E.st0%7Bfill:%23fff%7D%3C/style%3E%3Cpath class='st0' d='M109.8 13v135.6c0 7-5.8 12.8-13 12.8-5.8 0-10.7-3.6-12.4-9-8.5 6-19.2 9.4-30.5 9.4-29.6 0-53.9-24.1-53.9-53.9C0 78.3 24.3 54 53.9 54 65 54 75.2 57.4 84 63V13c0-7 5.8-13 12.8-13 7.2 0 13 6 13 13zm-27.7 94.9c0-15.6-12.6-28.1-28.1-28.1-15.6 0-28.1 12.6-28.1 28.1s12.5 28.1 28 28.1c15.6 0 28.2-12.6 28.2-28.1zM141.3 36.7c-7.5 0-13.4-6-13.4-13v-1.1c0-7.5 6-13.2 13.4-13.2 7 0 13 5.8 13 13.2v1.1c.1 7-5.9 13-13 13zm0 125.1c-7.5 0-13.4-6-13.4-13.2V66.3c0-7.2 6-13 13.4-13 7 0 13 5.8 13 13v82.3c.1 7.2-5.9 13.2-13 13.2zM211.7 162.2c-13.6 0-27.3-5.5-34.3-12.2-5.1-4.7-5.5-12.8-.6-17.9 4.7-5.3 12.8-5.5 17.9-.9 3.8 3.6 18.1 8.5 26.2 3.2 2.1-1.3 3.4-3.6 3.4-6 0-3-2.6-5.1-4.7-6-1.9-1.1-5.3-1.1-9.2-1.1-5.1 0-10.9-.2-16.8-2.3-11.1-3.6-20-15.1-20.9-26.2-1.1-13.4 4.7-21.7 9.6-26.4 10.7-9.8 26.2-11.3 37.5-9.4 8.5 1.5 14.9 4.5 20.3 9.4 5.1 4.7 5.5 12.8.9 17.9-2.8 3-6.8 4.5-10.9 4.1-1.9-.2-3.8-.9-5.5-1.9-3-2.1-5.1-3.6-9-4.3-6.4-1.1-18.3-.6-17.5 8.5.2 1.1 2.1 3.8 3.8 4.5 2.1.6 5.3.6 8.7.6 5.5.2 12.6.2 19.6 3.4 11.7 5.3 19.4 16.8 19.4 29.2 0 10.9-5.5 21.1-14.7 27.3-7.2 4.8-15.1 6.5-23.2 6.5zM365.2 108.3v40.3c0 7-5.5 12.8-12.6 12.8-7.2 0-12.8-5.8-12.8-12.8v-40.3c0-15.1-11.1-27.3-24.5-27.3-16.6 0-25.2 16.6-25.2 31.3v36.2c0 7-5.8 12.8-12.8 12.8s-12.8-5.8-12.8-12.8V67.2c0-7 5.8-12.8 12.8-12.8 5.5 0 10.2 3.6 11.9 8.7 7.7-4.9 16.4-7.7 26-7.7 27.6 0 50 23.7 50 52.9zM467.7 115.6H402c3 12.2 13.9 21.5 27.1 21.5 6.8 0 16.8-2.8 22.4-8.1 5.1-4.9 13.2-4.9 18.1.2 5.1 4.9 4.9 13.2-.2 18.1-11.7 11.3-28.1 15.1-40.3 15.1-29.6 0-53.3-23.9-53.3-53.5 0-29.2 23.7-53.5 53.3-53.5 3.2 0 6.2.2 9.4.9C453 59.1 465.4 68 473 80.8c3.4 6 7.2 13.9 6.8 20.9 0 1.9-.9 4.1-1.7 6.2-1.6 4-5.2 7.7-10.4 7.7zm-62-21.6h45.2c-4.3-8.1-12.2-12.8-21.7-12.8-9.9 0-18.4 4.9-23.5 12.8zM587.6 68.4v93.2c0 29.6-23.7 53.9-52.4 53.9-15.3 0-29.6-6.8-39.7-18.8-4.5-5.3-3.8-13.4 1.3-18.1s13-4.1 17.5 1.5c5.3 6.2 13 9.8 20.9 9.8 15.1 0 27.5-12.8 27.5-28.4v-8.7c-7 4.1-15.4 6.6-24.3 6.6-26.9 0-48.8-23.5-48.8-52.4V68.9c0-6.8 5.5-12.8 12.4-12.8s12.4 6 12.4 12.8V107c0 14.7 10.9 26.9 24.1 26.9 13.4 0 24.3-12.2 24.3-26.9V68.4c0-7 5.8-12.8 12.4-12.8 6.8 0 12.4 5.8 12.4 12.8zM654.8 324.4c0 7.2-5.8 13-13 13-9 0-17.7-4.5-23.2-11.5-6.4-8.3-6-17.7-6-27.7v-63.7-46c0-7 5.8-12.8 12.8-12.8 7.2 0 13 5.8 13 12.8v115.8c0 .6-.2 1.3-.2 1.9s.2 1.3.2 1.9c0 1.9 1.5 3.6 3.4 3.6 7.3-.1 13 5.6 13 12.7zM756.5 332.9c-2.6 2.6-6.2 4.1-9.6 4.1-3.2 0-6.2-1.1-8.7-3.4l-43.5-40.1v31.8c0 7.2-5.8 13-13 13s-13-5.8-13-13V189.4c0-7.2 5.8-13 13-13s13 5.8 13 13v72.1l42-29c6-4.1 14.1-2.8 18.1 3.2 4.3 5.8 2.8 13.9-3 18.1l-35.6 24.1 39.7 36.5c5.1 4.9 5.5 13 .6 18.5zM784 212.2c-7.5 0-13.4-6-13.4-13v-1.1c0-7.5 6-13.2 13.4-13.2 7 0 13 5.8 13 13.2v1.1c0 7.1-6 13-13 13zm0 125.2c-7.5 0-13.4-6-13.4-13.2v-82.3c0-7.2 6-13 13.4-13 7 0 13 5.8 13 13v82.3c0 7.2-6 13.2-13 13.2zM873.1 323.9c0 7.2-5.8 12.8-12.8 12.8-1.9 0-3.6 0-5.5-.2-7-1.1-13.9-4.1-18.8-9.6-4.3-4.9-7.2-12.6-7.2-19.2V254h-9.2c-7 0-12.8-5.8-12.8-12.8s5.8-12.8 12.8-12.8h9.2v-40.7c0-7 5.8-12.8 12.8-12.8s12.8 5.8 12.8 12.8v40.7h7c7 0 12.8 5.8 12.8 12.8s-5.8 12.8-12.8 12.8h-7v50.7c.4 1.7 0 4.3 1.5 5.5 1.1 1.1 3 .9 4.5.9 7 .1 12.7 5.8 12.7 12.8z'/%3E%3Cg%3E%3Cpath class='st0' d='M380.4 323.9c0 7.2-5.8 12.8-12.8 12.8-1.9 0-3.6 0-5.5-.2-7-1.1-13.9-4.1-18.8-9.6-4.3-4.9-7.2-12.6-7.2-19.2V254h-9.2c-7 0-12.8-5.8-12.8-12.8s5.8-12.8 12.8-12.8h9.2v-40.7c0-7 5.8-12.8 12.8-12.8s12.8 5.8 12.8 12.8v40.7h7c7 0 12.8 5.8 12.8 12.8s-5.8 12.8-12.8 12.8h-7v50.7c.4 1.7 0 4.3 1.5 5.5 1.1 1.1 3 .9 4.5.9 7 .1 12.7 5.8 12.7 12.8z'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st0' d='M419.6 244.7c-.2-1.4-.4-3-.6-4.5-.2-1.8-.5-3.7-.7-5.5-.1-1 .1-1.3 1-1.6 3-1 5.9-1.9 8.9-2.9.9-.3 1.4.1 1.8.7.7 1.4 1.5 2.8 2.2 4.2.8 1.6 1.6 3.1 2.5 4.7.1.1.3.2.4.2l6.3-.3c.3 0 .4-.1.5-.3 1.2-3 2.5-6 3.7-9 .3-.8.9-1.3 1.9-1 3.1.7 6.1 1.4 9.2 2 .6.1 1 .5 1 1.1 0 1.1 0 2.3-.1 3.4-.1 2.3-.2 4.6-.3 6.8 0 .1.1.3.3.4 1.9 1 3.7 1.9 5.6 2.9.2.1.4.1.5 0 2.5-2 5.1-4 7.7-5.9.2-.1.4-.3.6-.4.5-.3 1-.2 1.4.2 2.4 2.2 4.8 4.4 7.2 6.5.5.5.6 1 .2 1.7-.4.6-.7 1.2-1.1 1.8l-4.2 6.6c-.2.2-.1.4 0 .6 1.1 1.7 2.2 3.5 3.3 5.2.2.2.3.3.6.3 3.2-.5 6.5-.9 9.7-1.3 1-.1 1.4.1 1.7 1 1 3 1.9 5.9 2.9 8.9.3.9.1 1.3-.7 1.7-2.7 1.4-5.4 2.9-8.1 4.3-.9.5-.9.5-.8 1.5.1 1.8.2 3.7.2 5.5 0 .3.1.4.3.5l4.5 1.8c1.7.7 3.3 1.4 5 2.1.5.2.7.7.6 1.3-.7 3.2-1.4 6.3-2.1 9.5-.2.7-.5 1-1.2 1-1.4 0-2.8-.1-4.2-.1l-6-.3c-.3 0-.4.1-.5.3-.9 1.9-1.9 3.7-2.9 5.6-.1.2-.1.4 0 .5 1.9 2.5 3.9 5 5.8 7.5.2.2.3.4.4.6.3.5.3 1-.1 1.5-2.2 2.4-4.4 4.8-6.6 7.3-.4.4-.9.5-1.4.2-1.3-.8-2.7-1.6-4-2.5l-4.8-3c-.1-.1-.3 0-.4 0-1.8 1.1-3.6 2.3-5.4 3.4-.2.1-.3.3-.2.5.4 3.3.9 6.5 1.3 9.8.1 1-.1 1.4-1 1.7-3 1-6 1.9-9 2.9-.8.2-1.3.1-1.7-.7-1-2-2.1-3.9-3.1-5.9-.5-1-1.1-2-1.6-3-.1-.2-.2-.2-.4-.2l-6.3.3c-.2 0-.4.1-.5.3-1.2 3-2.5 6-3.7 9.1-.3.8-.9 1.2-1.8 1-3-.7-6.1-1.3-9.1-2-.8-.2-1.1-.5-1.1-1.3 0-1.4.1-2.8.1-4.2.1-2 .2-3.9.2-5.9 0-.2-.1-.3-.3-.5-1.9-1-3.7-1.9-5.6-2.9-.2-.1-.4-.1-.5.1-1.6 1.2-3.1 2.4-4.7 3.6-1 .8-2 1.6-3 2.3-.2.2-.5.3-.7.4-.4.2-.8.1-1.1-.2-2.4-2.2-4.9-4.4-7.3-6.7-.5-.4-.5-1-.1-1.7s.9-1.4 1.3-2.1c1.3-2.1 2.6-4.2 4-6.3.1-.2.1-.4 0-.6-1.1-1.7-2.2-3.5-3.3-5.2-.2-.3-.3-.3-.6-.3-3.2.4-6.5.9-9.7 1.3-1 .1-1.4-.1-1.7-1.1-1-3-1.9-5.9-2.9-8.9-.3-.9.1-1.4.7-1.7 1.3-.7 2.7-1.4 4.1-2.1 1.6-.8 3.2-1.7 4.8-2.5.2-.1.3-.2.2-.4l-.3-6.3c0-.3-.1-.3-.3-.4-2.2-.9-4.4-1.8-6.7-2.7-.8-.3-1.6-.7-2.3-.9-.8-.3-1.2-.9-1-1.8.7-3.1 1.4-6.1 2-9.2.1-.7.5-1 1.2-1 1.1 0 2.3.1 3.4.1 2.3.1 4.6.2 6.8.3.1 0 .3-.1.4-.3 1-1.9 1.9-3.7 2.9-5.6.1-.2.1-.4 0-.5l-4.2-5.4-1.8-2.4c-.6-.8-.6-1.3.1-2 2.1-2.3 4.2-4.7 6.3-7 .4-.5.9-.6 1.5-.3l1.5.9c2.4 1.5 4.7 3 7.1 4.5.2.1.3.2.6 0 1.7-1.2 3.5-2.4 5.4-3.6zm-3.7 46.4c4.3 13.3 18.4 20.7 31.7 16.6 13.6-4.1 21.1-18.6 17-31.9-4.2-13.6-18.5-21.1-31.9-17-13.4 4.2-21.1 18.6-16.8 32.3z'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st0' d='M536.9 239.6c.3-1.4.6-2.9 1-4.4l1.2-5.4c.2-1 .6-1.2 1.5-1.2 3.1.1 6.2.3 9.3.4 1 0 1.3.6 1.4 1.3.2 1.6.4 3.1.6 4.7.2 1.7.5 3.5.7 5.2 0 .1.2.3.3.3 2 .6 4 1.2 6 1.9.3.1.4 0 .6-.2 2.2-2.4 4.4-4.8 6.5-7.2.6-.6 1.3-.9 2.1-.3 2.6 1.7 5.3 3.4 8 5 .6.4.7.8.5 1.4-.4 1.1-.8 2.1-1.3 3.2-.9 2.1-1.7 4.2-2.6 6.3-.1.1 0 .4.1.5 1.4 1.6 2.9 3.1 4.3 4.6.2.2.3.2.5.1 3.1-1 6.1-2 9.2-3 .2-.1.4-.1.6-.2.6-.1 1 .1 1.2.6 1.5 2.9 3 5.7 4.6 8.6.3.6.2 1.2-.4 1.7-.5.4-1.1.9-1.7 1.3-2.1 1.6-4.1 3.2-6.2 4.8-.2.2-.3.3-.2.6.5 2 .9 4 1.4 6.1.1.3.2.4.4.4l9.6 2.1c1 .2 1.2.6 1.2 1.5-.1 3.1-.2 6.2-.4 9.3 0 .9-.4 1.3-1.3 1.4-3 .4-6.1.8-9.1 1.2-1 .1-1 .1-1.3 1.1-.5 1.8-1.1 3.5-1.7 5.3-.1.2-.1.4.1.6l3.6 3.3c1.3 1.2 2.7 2.4 4 3.7.4.4.5.9.1 1.4-1.7 2.7-3.5 5.5-5.2 8.2-.4.6-.8.8-1.5.5l-3.9-1.5c-1.8-.8-3.7-1.5-5.5-2.3-.2-.1-.4-.1-.6.1-1.5 1.4-3.1 2.9-4.6 4.3-.2.2-.2.3-.1.5 1 3 1.9 6 2.9 9 .1.2.1.5.2.7.1.6-.1 1-.6 1.3-2.9 1.5-5.8 3-8.7 4.6-.5.3-1 .2-1.4-.3-1-1.2-2-2.5-2.9-3.7-1.2-1.5-2.3-3-3.5-4.5-.1-.1-.3-.1-.4-.1-2.1.4-4.1.9-6.2 1.4-.3.1-.3.2-.4.4l-2.1 9.6c-.2 1-.6 1.2-1.5 1.2-3.1-.1-6.3-.2-9.4-.4-.8 0-1.2-.4-1.3-1.2l-.9-6.6c-.2-1.1-.3-2.2-.5-3.3 0-.2-.1-.3-.3-.4-2-.6-4-1.2-6-1.9-.2-.1-.4 0-.5.1-2.2 2.4-4.4 4.8-6.6 7.3-.6.7-1.3.8-2.1.3-2.6-1.7-5.3-3.3-7.9-5-.7-.4-.9-.9-.6-1.6.5-1.3 1-2.6 1.6-3.9.7-1.8 1.5-3.6 2.2-5.5.1-.2.1-.3-.1-.5-1.4-1.5-2.9-3.1-4.3-4.6-.2-.2-.3-.2-.5-.1-1.9.6-3.7 1.2-5.6 1.8l-3.6 1.2c-.3.1-.5.1-.8.2-.4 0-.8-.2-1-.6-1.5-2.9-3.1-5.8-4.6-8.8-.3-.5-.1-1.1.5-1.6.7-.5 1.3-1 2-1.5 2-1.5 3.9-3 5.9-4.5.2-.2.2-.3.2-.6-.5-2-.9-4-1.3-6.1-.1-.3-.2-.4-.5-.5l-9.6-2.1c-1-.2-1.3-.6-1.2-1.6.1-3.1.3-6.2.4-9.3 0-.9.5-1.3 1.2-1.4l4.5-.6c1.8-.2 3.6-.5 5.4-.7.2 0 .3-.1.4-.3.6-2 1.2-4 1.9-6.1.1-.3 0-.4-.2-.5-1.8-1.6-3.6-3.2-5.3-4.8-.6-.6-1.2-1.1-1.9-1.7-.6-.5-.9-1.2-.3-2.1 1.7-2.6 3.4-5.3 5-8 .4-.6.8-.8 1.5-.5 1.1.4 2.1.8 3.2 1.3 2.1.9 4.2 1.7 6.3 2.6.1 0 .3 0 .4-.1 1.6-1.4 3.1-2.9 4.6-4.3.2-.2.2-.3.2-.5l-2.1-6.6c-.3-.9-.6-1.9-.9-2.8-.3-1-.1-1.4.8-1.9 2.8-1.5 5.6-2.9 8.3-4.4.6-.3 1.1-.2 1.5.3.4.4.7.9 1.1 1.4l5.1 6.6c.1.2.3.3.5.2 2.4-.1 4.6-.7 6.8-1.2zM517.6 282c-.5 13.9 10.2 25.7 24.1 26.5 14.2.8 26.2-10.2 26.9-24.2.7-14.2-10.2-26.1-24.2-26.8-14.1-.8-26.2 10.2-26.8 24.5z'/%3E%3C/g%3E%3Cpath class='st0' d='M785.5 107.3H770c-4.4.1-9.1-1.2-12.3 3.6-.6.9-2.9.8-4.5 1.1-23.7 4-42.7 2.2-66.5.9-17.8-1-35.7-.3-53.6.2-8.5.2-11.5-1.3-11.9-9.9-.4-8.1.1-16.3.6-24.4.3-5 3.3-7.6 8.5-6.5 24.6 5.4 44.6 2.9 69.4 3 18.8.1 38.3.3 56 5.6 14.6 4.4 28.9 3 43.2 5.3 7.3 1.2 13.5-1.1 19.6-4.3 11.9-6.2 14.7-16.4 6.6-27.1-6.2-8.2-13.7-15.4-20.7-23-2-2.2-4.4-4.1-6.1-6.5-1-1.4-1-3.6-1.4-5.4 2-.3 4-.6 6-.7.5 0 1.1.4 1.6.8 13.4 10.2 28.2 19.1 39.7 31 13.2 13.6 18 32 18 51.1 0 3.8-1.1 8.2-3.2 11.3-6.2 9.2-5.4 18.1-1.5 27.7 1.6 4.1 2.4 8.8 2.3 13.2-.1 5.1-3.3 7.8-8.7 7.4-5.2-.3-10.3-.2-15.5-.5-4-.2-9.7 1.1-10.8-3.9-1-5 0-10.7 1-15.9.7-3.7 4-7.1 4.3-10.7 1-13-9.4-23-23.8-23.4-6.9-.1-13.9 0-20.8 0zM6.5 280.3c8.5 0 16 .1 23.6 0 10.6-.1 17.9-6.9 17.9-16.7.1-9.8-7.2-16.9-17.6-17.1-7.6-.2-15.2 0-24.1-1.6 3.5-4 6.5-8.6 10.6-11.8 16.1-13 39.9-10.4 53 5.8 2.8 3.4 5.6 4.3 9.6 4.3 49.7-.1 99.5 0 149.2-.2 3.2 0 7-1.4 9.5-3.3 13.7-10.6 31.7-9.5 43.1 2.9 10.9 11.9 10.7 30.3-.3 42.1-11.5 12.2-29.7 13-43.2 2.2-2.3-1.9-5.9-3-9-3-49.7-.2-99.5-.1-149.2-.2-4.4 0-7.2 1.2-10.2 4.7-17.5 20.8-51.1 17-62.9-8.1zm251.8-2.2c7-.7 15.6-8.4 15.7-14.5.1-5.9-8.8-14.3-15.2-14.1-3.2.1-7.5-.1-9.3 1.8-3.1 3.2-6.5 7.9-6.5 12s3.3 8.7 6.3 12.1c1.9 1.9 5.9 1.8 9 2.7z'/%3E%3C/svg%3E")`
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            <AccessibleText>{title}</AccessibleText>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            ...scale(1.5),
            marginBottom: 0,
            marginTop: 0,
            maxWidth: '400px'
          }}
        >
          <Link
            style={{
              display: 'block',
              boxShadow: `none`,
              textDecoration: `none`,
              width: '230px',
              height: '127px',
              color: `inherit`,
              margin: `0 1em`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 874.2 338.2' xml:space='preserve'%3E%3Cstyle%3E.st0%7Bfill:%23fff%7D%3C/style%3E%3Cpath class='st0' d='M109.8 13v135.6c0 7-5.8 12.8-13 12.8-5.8 0-10.7-3.6-12.4-9-8.5 6-19.2 9.4-30.5 9.4-29.6 0-53.9-24.1-53.9-53.9C0 78.3 24.3 54 53.9 54 65 54 75.2 57.4 84 63V13c0-7 5.8-13 12.8-13 7.2 0 13 6 13 13zm-27.7 94.9c0-15.6-12.6-28.1-28.1-28.1-15.6 0-28.1 12.6-28.1 28.1s12.5 28.1 28 28.1c15.6 0 28.2-12.6 28.2-28.1zM141.3 36.7c-7.5 0-13.4-6-13.4-13v-1.1c0-7.5 6-13.2 13.4-13.2 7 0 13 5.8 13 13.2v1.1c.1 7-5.9 13-13 13zm0 125.1c-7.5 0-13.4-6-13.4-13.2V66.3c0-7.2 6-13 13.4-13 7 0 13 5.8 13 13v82.3c.1 7.2-5.9 13.2-13 13.2zM211.7 162.2c-13.6 0-27.3-5.5-34.3-12.2-5.1-4.7-5.5-12.8-.6-17.9 4.7-5.3 12.8-5.5 17.9-.9 3.8 3.6 18.1 8.5 26.2 3.2 2.1-1.3 3.4-3.6 3.4-6 0-3-2.6-5.1-4.7-6-1.9-1.1-5.3-1.1-9.2-1.1-5.1 0-10.9-.2-16.8-2.3-11.1-3.6-20-15.1-20.9-26.2-1.1-13.4 4.7-21.7 9.6-26.4 10.7-9.8 26.2-11.3 37.5-9.4 8.5 1.5 14.9 4.5 20.3 9.4 5.1 4.7 5.5 12.8.9 17.9-2.8 3-6.8 4.5-10.9 4.1-1.9-.2-3.8-.9-5.5-1.9-3-2.1-5.1-3.6-9-4.3-6.4-1.1-18.3-.6-17.5 8.5.2 1.1 2.1 3.8 3.8 4.5 2.1.6 5.3.6 8.7.6 5.5.2 12.6.2 19.6 3.4 11.7 5.3 19.4 16.8 19.4 29.2 0 10.9-5.5 21.1-14.7 27.3-7.2 4.8-15.1 6.5-23.2 6.5zM365.2 108.3v40.3c0 7-5.5 12.8-12.6 12.8-7.2 0-12.8-5.8-12.8-12.8v-40.3c0-15.1-11.1-27.3-24.5-27.3-16.6 0-25.2 16.6-25.2 31.3v36.2c0 7-5.8 12.8-12.8 12.8s-12.8-5.8-12.8-12.8V67.2c0-7 5.8-12.8 12.8-12.8 5.5 0 10.2 3.6 11.9 8.7 7.7-4.9 16.4-7.7 26-7.7 27.6 0 50 23.7 50 52.9zM467.7 115.6H402c3 12.2 13.9 21.5 27.1 21.5 6.8 0 16.8-2.8 22.4-8.1 5.1-4.9 13.2-4.9 18.1.2 5.1 4.9 4.9 13.2-.2 18.1-11.7 11.3-28.1 15.1-40.3 15.1-29.6 0-53.3-23.9-53.3-53.5 0-29.2 23.7-53.5 53.3-53.5 3.2 0 6.2.2 9.4.9C453 59.1 465.4 68 473 80.8c3.4 6 7.2 13.9 6.8 20.9 0 1.9-.9 4.1-1.7 6.2-1.6 4-5.2 7.7-10.4 7.7zm-62-21.6h45.2c-4.3-8.1-12.2-12.8-21.7-12.8-9.9 0-18.4 4.9-23.5 12.8zM587.6 68.4v93.2c0 29.6-23.7 53.9-52.4 53.9-15.3 0-29.6-6.8-39.7-18.8-4.5-5.3-3.8-13.4 1.3-18.1s13-4.1 17.5 1.5c5.3 6.2 13 9.8 20.9 9.8 15.1 0 27.5-12.8 27.5-28.4v-8.7c-7 4.1-15.4 6.6-24.3 6.6-26.9 0-48.8-23.5-48.8-52.4V68.9c0-6.8 5.5-12.8 12.4-12.8s12.4 6 12.4 12.8V107c0 14.7 10.9 26.9 24.1 26.9 13.4 0 24.3-12.2 24.3-26.9V68.4c0-7 5.8-12.8 12.4-12.8 6.8 0 12.4 5.8 12.4 12.8zM654.8 324.4c0 7.2-5.8 13-13 13-9 0-17.7-4.5-23.2-11.5-6.4-8.3-6-17.7-6-27.7v-63.7-46c0-7 5.8-12.8 12.8-12.8 7.2 0 13 5.8 13 12.8v115.8c0 .6-.2 1.3-.2 1.9s.2 1.3.2 1.9c0 1.9 1.5 3.6 3.4 3.6 7.3-.1 13 5.6 13 12.7zM756.5 332.9c-2.6 2.6-6.2 4.1-9.6 4.1-3.2 0-6.2-1.1-8.7-3.4l-43.5-40.1v31.8c0 7.2-5.8 13-13 13s-13-5.8-13-13V189.4c0-7.2 5.8-13 13-13s13 5.8 13 13v72.1l42-29c6-4.1 14.1-2.8 18.1 3.2 4.3 5.8 2.8 13.9-3 18.1l-35.6 24.1 39.7 36.5c5.1 4.9 5.5 13 .6 18.5zM784 212.2c-7.5 0-13.4-6-13.4-13v-1.1c0-7.5 6-13.2 13.4-13.2 7 0 13 5.8 13 13.2v1.1c0 7.1-6 13-13 13zm0 125.2c-7.5 0-13.4-6-13.4-13.2v-82.3c0-7.2 6-13 13.4-13 7 0 13 5.8 13 13v82.3c0 7.2-6 13.2-13 13.2zM873.1 323.9c0 7.2-5.8 12.8-12.8 12.8-1.9 0-3.6 0-5.5-.2-7-1.1-13.9-4.1-18.8-9.6-4.3-4.9-7.2-12.6-7.2-19.2V254h-9.2c-7 0-12.8-5.8-12.8-12.8s5.8-12.8 12.8-12.8h9.2v-40.7c0-7 5.8-12.8 12.8-12.8s12.8 5.8 12.8 12.8v40.7h7c7 0 12.8 5.8 12.8 12.8s-5.8 12.8-12.8 12.8h-7v50.7c.4 1.7 0 4.3 1.5 5.5 1.1 1.1 3 .9 4.5.9 7 .1 12.7 5.8 12.7 12.8z'/%3E%3Cg%3E%3Cpath class='st0' d='M380.4 323.9c0 7.2-5.8 12.8-12.8 12.8-1.9 0-3.6 0-5.5-.2-7-1.1-13.9-4.1-18.8-9.6-4.3-4.9-7.2-12.6-7.2-19.2V254h-9.2c-7 0-12.8-5.8-12.8-12.8s5.8-12.8 12.8-12.8h9.2v-40.7c0-7 5.8-12.8 12.8-12.8s12.8 5.8 12.8 12.8v40.7h7c7 0 12.8 5.8 12.8 12.8s-5.8 12.8-12.8 12.8h-7v50.7c.4 1.7 0 4.3 1.5 5.5 1.1 1.1 3 .9 4.5.9 7 .1 12.7 5.8 12.7 12.8z'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st0' d='M419.6 244.7c-.2-1.4-.4-3-.6-4.5-.2-1.8-.5-3.7-.7-5.5-.1-1 .1-1.3 1-1.6 3-1 5.9-1.9 8.9-2.9.9-.3 1.4.1 1.8.7.7 1.4 1.5 2.8 2.2 4.2.8 1.6 1.6 3.1 2.5 4.7.1.1.3.2.4.2l6.3-.3c.3 0 .4-.1.5-.3 1.2-3 2.5-6 3.7-9 .3-.8.9-1.3 1.9-1 3.1.7 6.1 1.4 9.2 2 .6.1 1 .5 1 1.1 0 1.1 0 2.3-.1 3.4-.1 2.3-.2 4.6-.3 6.8 0 .1.1.3.3.4 1.9 1 3.7 1.9 5.6 2.9.2.1.4.1.5 0 2.5-2 5.1-4 7.7-5.9.2-.1.4-.3.6-.4.5-.3 1-.2 1.4.2 2.4 2.2 4.8 4.4 7.2 6.5.5.5.6 1 .2 1.7-.4.6-.7 1.2-1.1 1.8l-4.2 6.6c-.2.2-.1.4 0 .6 1.1 1.7 2.2 3.5 3.3 5.2.2.2.3.3.6.3 3.2-.5 6.5-.9 9.7-1.3 1-.1 1.4.1 1.7 1 1 3 1.9 5.9 2.9 8.9.3.9.1 1.3-.7 1.7-2.7 1.4-5.4 2.9-8.1 4.3-.9.5-.9.5-.8 1.5.1 1.8.2 3.7.2 5.5 0 .3.1.4.3.5l4.5 1.8c1.7.7 3.3 1.4 5 2.1.5.2.7.7.6 1.3-.7 3.2-1.4 6.3-2.1 9.5-.2.7-.5 1-1.2 1-1.4 0-2.8-.1-4.2-.1l-6-.3c-.3 0-.4.1-.5.3-.9 1.9-1.9 3.7-2.9 5.6-.1.2-.1.4 0 .5 1.9 2.5 3.9 5 5.8 7.5.2.2.3.4.4.6.3.5.3 1-.1 1.5-2.2 2.4-4.4 4.8-6.6 7.3-.4.4-.9.5-1.4.2-1.3-.8-2.7-1.6-4-2.5l-4.8-3c-.1-.1-.3 0-.4 0-1.8 1.1-3.6 2.3-5.4 3.4-.2.1-.3.3-.2.5.4 3.3.9 6.5 1.3 9.8.1 1-.1 1.4-1 1.7-3 1-6 1.9-9 2.9-.8.2-1.3.1-1.7-.7-1-2-2.1-3.9-3.1-5.9-.5-1-1.1-2-1.6-3-.1-.2-.2-.2-.4-.2l-6.3.3c-.2 0-.4.1-.5.3-1.2 3-2.5 6-3.7 9.1-.3.8-.9 1.2-1.8 1-3-.7-6.1-1.3-9.1-2-.8-.2-1.1-.5-1.1-1.3 0-1.4.1-2.8.1-4.2.1-2 .2-3.9.2-5.9 0-.2-.1-.3-.3-.5-1.9-1-3.7-1.9-5.6-2.9-.2-.1-.4-.1-.5.1-1.6 1.2-3.1 2.4-4.7 3.6-1 .8-2 1.6-3 2.3-.2.2-.5.3-.7.4-.4.2-.8.1-1.1-.2-2.4-2.2-4.9-4.4-7.3-6.7-.5-.4-.5-1-.1-1.7s.9-1.4 1.3-2.1c1.3-2.1 2.6-4.2 4-6.3.1-.2.1-.4 0-.6-1.1-1.7-2.2-3.5-3.3-5.2-.2-.3-.3-.3-.6-.3-3.2.4-6.5.9-9.7 1.3-1 .1-1.4-.1-1.7-1.1-1-3-1.9-5.9-2.9-8.9-.3-.9.1-1.4.7-1.7 1.3-.7 2.7-1.4 4.1-2.1 1.6-.8 3.2-1.7 4.8-2.5.2-.1.3-.2.2-.4l-.3-6.3c0-.3-.1-.3-.3-.4-2.2-.9-4.4-1.8-6.7-2.7-.8-.3-1.6-.7-2.3-.9-.8-.3-1.2-.9-1-1.8.7-3.1 1.4-6.1 2-9.2.1-.7.5-1 1.2-1 1.1 0 2.3.1 3.4.1 2.3.1 4.6.2 6.8.3.1 0 .3-.1.4-.3 1-1.9 1.9-3.7 2.9-5.6.1-.2.1-.4 0-.5l-4.2-5.4-1.8-2.4c-.6-.8-.6-1.3.1-2 2.1-2.3 4.2-4.7 6.3-7 .4-.5.9-.6 1.5-.3l1.5.9c2.4 1.5 4.7 3 7.1 4.5.2.1.3.2.6 0 1.7-1.2 3.5-2.4 5.4-3.6zm-3.7 46.4c4.3 13.3 18.4 20.7 31.7 16.6 13.6-4.1 21.1-18.6 17-31.9-4.2-13.6-18.5-21.1-31.9-17-13.4 4.2-21.1 18.6-16.8 32.3z'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st0' d='M536.9 239.6c.3-1.4.6-2.9 1-4.4l1.2-5.4c.2-1 .6-1.2 1.5-1.2 3.1.1 6.2.3 9.3.4 1 0 1.3.6 1.4 1.3.2 1.6.4 3.1.6 4.7.2 1.7.5 3.5.7 5.2 0 .1.2.3.3.3 2 .6 4 1.2 6 1.9.3.1.4 0 .6-.2 2.2-2.4 4.4-4.8 6.5-7.2.6-.6 1.3-.9 2.1-.3 2.6 1.7 5.3 3.4 8 5 .6.4.7.8.5 1.4-.4 1.1-.8 2.1-1.3 3.2-.9 2.1-1.7 4.2-2.6 6.3-.1.1 0 .4.1.5 1.4 1.6 2.9 3.1 4.3 4.6.2.2.3.2.5.1 3.1-1 6.1-2 9.2-3 .2-.1.4-.1.6-.2.6-.1 1 .1 1.2.6 1.5 2.9 3 5.7 4.6 8.6.3.6.2 1.2-.4 1.7-.5.4-1.1.9-1.7 1.3-2.1 1.6-4.1 3.2-6.2 4.8-.2.2-.3.3-.2.6.5 2 .9 4 1.4 6.1.1.3.2.4.4.4l9.6 2.1c1 .2 1.2.6 1.2 1.5-.1 3.1-.2 6.2-.4 9.3 0 .9-.4 1.3-1.3 1.4-3 .4-6.1.8-9.1 1.2-1 .1-1 .1-1.3 1.1-.5 1.8-1.1 3.5-1.7 5.3-.1.2-.1.4.1.6l3.6 3.3c1.3 1.2 2.7 2.4 4 3.7.4.4.5.9.1 1.4-1.7 2.7-3.5 5.5-5.2 8.2-.4.6-.8.8-1.5.5l-3.9-1.5c-1.8-.8-3.7-1.5-5.5-2.3-.2-.1-.4-.1-.6.1-1.5 1.4-3.1 2.9-4.6 4.3-.2.2-.2.3-.1.5 1 3 1.9 6 2.9 9 .1.2.1.5.2.7.1.6-.1 1-.6 1.3-2.9 1.5-5.8 3-8.7 4.6-.5.3-1 .2-1.4-.3-1-1.2-2-2.5-2.9-3.7-1.2-1.5-2.3-3-3.5-4.5-.1-.1-.3-.1-.4-.1-2.1.4-4.1.9-6.2 1.4-.3.1-.3.2-.4.4l-2.1 9.6c-.2 1-.6 1.2-1.5 1.2-3.1-.1-6.3-.2-9.4-.4-.8 0-1.2-.4-1.3-1.2l-.9-6.6c-.2-1.1-.3-2.2-.5-3.3 0-.2-.1-.3-.3-.4-2-.6-4-1.2-6-1.9-.2-.1-.4 0-.5.1-2.2 2.4-4.4 4.8-6.6 7.3-.6.7-1.3.8-2.1.3-2.6-1.7-5.3-3.3-7.9-5-.7-.4-.9-.9-.6-1.6.5-1.3 1-2.6 1.6-3.9.7-1.8 1.5-3.6 2.2-5.5.1-.2.1-.3-.1-.5-1.4-1.5-2.9-3.1-4.3-4.6-.2-.2-.3-.2-.5-.1-1.9.6-3.7 1.2-5.6 1.8l-3.6 1.2c-.3.1-.5.1-.8.2-.4 0-.8-.2-1-.6-1.5-2.9-3.1-5.8-4.6-8.8-.3-.5-.1-1.1.5-1.6.7-.5 1.3-1 2-1.5 2-1.5 3.9-3 5.9-4.5.2-.2.2-.3.2-.6-.5-2-.9-4-1.3-6.1-.1-.3-.2-.4-.5-.5l-9.6-2.1c-1-.2-1.3-.6-1.2-1.6.1-3.1.3-6.2.4-9.3 0-.9.5-1.3 1.2-1.4l4.5-.6c1.8-.2 3.6-.5 5.4-.7.2 0 .3-.1.4-.3.6-2 1.2-4 1.9-6.1.1-.3 0-.4-.2-.5-1.8-1.6-3.6-3.2-5.3-4.8-.6-.6-1.2-1.1-1.9-1.7-.6-.5-.9-1.2-.3-2.1 1.7-2.6 3.4-5.3 5-8 .4-.6.8-.8 1.5-.5 1.1.4 2.1.8 3.2 1.3 2.1.9 4.2 1.7 6.3 2.6.1 0 .3 0 .4-.1 1.6-1.4 3.1-2.9 4.6-4.3.2-.2.2-.3.2-.5l-2.1-6.6c-.3-.9-.6-1.9-.9-2.8-.3-1-.1-1.4.8-1.9 2.8-1.5 5.6-2.9 8.3-4.4.6-.3 1.1-.2 1.5.3.4.4.7.9 1.1 1.4l5.1 6.6c.1.2.3.3.5.2 2.4-.1 4.6-.7 6.8-1.2zM517.6 282c-.5 13.9 10.2 25.7 24.1 26.5 14.2.8 26.2-10.2 26.9-24.2.7-14.2-10.2-26.1-24.2-26.8-14.1-.8-26.2 10.2-26.8 24.5z'/%3E%3C/g%3E%3Cpath class='st0' d='M785.5 107.3H770c-4.4.1-9.1-1.2-12.3 3.6-.6.9-2.9.8-4.5 1.1-23.7 4-42.7 2.2-66.5.9-17.8-1-35.7-.3-53.6.2-8.5.2-11.5-1.3-11.9-9.9-.4-8.1.1-16.3.6-24.4.3-5 3.3-7.6 8.5-6.5 24.6 5.4 44.6 2.9 69.4 3 18.8.1 38.3.3 56 5.6 14.6 4.4 28.9 3 43.2 5.3 7.3 1.2 13.5-1.1 19.6-4.3 11.9-6.2 14.7-16.4 6.6-27.1-6.2-8.2-13.7-15.4-20.7-23-2-2.2-4.4-4.1-6.1-6.5-1-1.4-1-3.6-1.4-5.4 2-.3 4-.6 6-.7.5 0 1.1.4 1.6.8 13.4 10.2 28.2 19.1 39.7 31 13.2 13.6 18 32 18 51.1 0 3.8-1.1 8.2-3.2 11.3-6.2 9.2-5.4 18.1-1.5 27.7 1.6 4.1 2.4 8.8 2.3 13.2-.1 5.1-3.3 7.8-8.7 7.4-5.2-.3-10.3-.2-15.5-.5-4-.2-9.7 1.1-10.8-3.9-1-5 0-10.7 1-15.9.7-3.7 4-7.1 4.3-10.7 1-13-9.4-23-23.8-23.4-6.9-.1-13.9 0-20.8 0zM6.5 280.3c8.5 0 16 .1 23.6 0 10.6-.1 17.9-6.9 17.9-16.7.1-9.8-7.2-16.9-17.6-17.1-7.6-.2-15.2 0-24.1-1.6 3.5-4 6.5-8.6 10.6-11.8 16.1-13 39.9-10.4 53 5.8 2.8 3.4 5.6 4.3 9.6 4.3 49.7-.1 99.5 0 149.2-.2 3.2 0 7-1.4 9.5-3.3 13.7-10.6 31.7-9.5 43.1 2.9 10.9 11.9 10.7 30.3-.3 42.1-11.5 12.2-29.7 13-43.2 2.2-2.3-1.9-5.9-3-9-3-49.7-.2-99.5-.1-149.2-.2-4.4 0-7.2 1.2-10.2 4.7-17.5 20.8-51.1 17-62.9-8.1zm251.8-2.2c7-.7 15.6-8.4 15.7-14.5.1-5.9-8.8-14.3-15.2-14.1-3.2.1-7.5-.1-9.3 1.8-3.1 3.2-6.5 7.9-6.5 12s3.3 8.7 6.3 12.1c1.9 1.9 5.9 1.8 9 2.7z'/%3E%3C/svg%3E")`
            }}
            to={`/blog/`}
          >
            <AccessibleText>{title}</AccessibleText>
          </Link>
        </h3>
      )
    }
    return (
      <>
        <Header>{header}</Header>
        <Nav>
          <NavList>
            <ListItem key={1}>
              <NavLink to="https://waitupgame.com">Wait Up!</NavLink>
            </ListItem>
            <ListItem key={2}>
              <NavLink to="https://reminders.disneytoolkit.com">Reservation Reminders</NavLink>
            </ListItem>
          </NavList>
        </Nav>
        <Wrapper>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: `1024px`,
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <main>{children}</main>
          </div>
          <Footer>
            {new Date().getFullYear()} DisneyToolkit.com
          </Footer>
        </Wrapper>
      </>
    )
  }
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: linear-gradient(135deg, #00bfbc 0%,#7db9e8 100%);
`

const AccessibleText = styled.span`
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 127px);
  justify-content: space-between;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

const Nav = styled.nav`
  background-color: #3978af;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0 1em;
`;

const NavLink = styled(Link)`
  position: relative;
  display: block;
  padding: .5em 0;
  box-shadow: none;
  color: #fff;
  font-family: Montserrat, sans-serif;

  &:after {
    content: '';
    position: absolute;
    border-top: 1px solid white;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 8px;
    opacity: 0;
    transition: opacity .25s;
  }
  &:hover:after,
  &:focus:after {
    opacity: 1;
  }
`;

export default Layout
