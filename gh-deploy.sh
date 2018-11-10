#!/bin/sh
if [ -n "$(git status --porcelain)" ]
then
  echo "Error: cannot deploy until all changes are committed."
  exit 1
# else
#   echo "no changes";
fi

npm run be # build and export static html files
git add .
git commit -m "build and export static html files"
git subtree split --prefix out -b master # create a local master branch containing the splitted output folder
git push -f origin master:master # force the push of the master branch to the remote gh-pages branch at origin
git branch -D master # delete the local master because you don't need it
git reset --hard HEAD~1 # remove the commit where the static html was exported. we don't need this in the history
