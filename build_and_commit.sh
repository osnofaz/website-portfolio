#!/bin/bash

# Define variables
BUILD_BRANCH="build-branch"
BUILD_COMMAND="npm run build"  # or "yarn build"
COMMIT_MESSAGE="Build React project"

# Create a new branch for building
git checkout -b "$BUILD_BRANCH"

# Run build command
$BUILD_COMMAND

# Add build files to Git
git add build/

# Commit the changes
git commit -m "$COMMIT_MESSAGE"

# Push the build branch to the remote repository
git push origin "$BUILD_BRANCH"

# Switch back to the original branch
git checkout -

echo "React project has been built and committed to branch '$BUILD_BRANCH'."
