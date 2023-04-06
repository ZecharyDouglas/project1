import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import React from "react";
import App from "../App";
import Navbar from "./Navbar";
import Date from "./Date";
import TestRenderer from "react-test-renderer";

describe("test for the value of pieces of states", async () => {
  it("testing the value of loadStatus", () => {
    expect(Navbar.loadStatus).toBeFalsy();
  });
  it.fails("testing if the rates in Navbar are not defined", () => {
    expect(Navbar.rates).toBeDefined();
  });
});
