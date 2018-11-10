#!/bin/sh
if [ -n "$(git status --porcelain)" ]
then
  echo "Error: cannot deploy until all changes are committed."
  exit 1
# else
#   echo "no changes";
fi

echo "-- Build the pages and export static HTML files"
npm run be # build and export static html files

echo "-- Creating a local README file"
echo "This branch contains only the static HTML export files." > ./out/README.md
echo "You probably want to check out [the dev branch](https://github.com/pcraig3/pcraig3.github.io/tree/dev) instead." >> ./out/README.md

git add .
git commit -m "build and export static html files"

echo "-- Create a local master branch containing only the /out folder"
git subtree split --prefix out -b master

echo "-- Force push the (new) master branch over the current github master branch"
git push -f origin master:master

echo "-- Delete the local master branch"
git branch -D master

echo "-- Remove the commit where the static HTML was exported. We don't need this in the history."

git reset --hard HEAD~1 #

echo "-- Hooray! New site should be up now and local side-effects have been undone."


# https://github.com/pcraig3/pcraig3.github.io/tree/dev
