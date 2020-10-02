import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, useLocation } from "wouter";

const NavigationObserver = ({ children, state }) => {
  const [location, setLocation] = useLocation();
  const { auth } = state;

  children.map(({ props }) => {
    if (props.path === location) {
      if (props.isPrivate && !auth.token) setLocation("/login");
      if (!props.isPrivate && auth.token) setLocation("/list");
    }
  });
  return <>{children}</>;
};

const mapToStateToProps = (state) => {
  return { state };
};

export default connect(mapToStateToProps)(NavigationObserver);
