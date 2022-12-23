#!/bin/bash

find . -name dist -type d -print0 | xargs -0 rm -r --
find . -name node_modules -type d -print0 | xargs -0 rm -r --
