#!/bin/bash
envsubst < custom_theme/main.template > custom_theme/main.html
pip install mkdocs-material
mkdocs build

