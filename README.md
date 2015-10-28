# tern-react

[![Build Status](https://secure.travis-ci.org/angelozerr/tern-react.png)](http://travis-ci.org/angelozerr/tern-react)
[![NPM version](https://img.shields.io/npm/v/tern-react.svg)](https://www.npmjs.org/package/tern-react)

Tern plugin adding [React](https://facebook.github.io/react/) support.

Pay attention!, this project is just a POC to try [acorn-jsx](https://github.com/RReverser/acorn-jsx).
There is a lot of limitation:

 * JSX completion cannot work since [acorn-jsx](https://github.com/RReverser/acorn-jsx) cannot support acorn_loose (it is not able to parse not valid JSX). See [issue 32](https://github.com/RReverser/acorn-jsx/issues/32) for more information.
 
Release was done just for [jsctags](https://github.com/ramitos/jsctags).
