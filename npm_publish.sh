#!/bin/bash

set -e

publish_package()
{
  PACKAGE_NAME=$(node -p -e "require('./package.json').name")  # the name from the package.json
  PACKAGE_VERSION=$(node -p -e "require('./package.json').version")  # the version from the package.json
  LATEST_RELEASE=$(npm view $PACKAGE_NAME version 2> /dev/null || true)  # this is the latest release version in Artifactory
  ARTIFACTORY_VERSIONS=$(( npm view $PACKAGE_NAME versions --json 2> /dev/null || true ) | sed -e 's/^\[* *"*//' -e 's/"*,*]*$//' | xargs)
  ARTIFACTORY_VERSION_PATTERN=$(echo ${ARTIFACTORY_VERSIONS} | sed 's/ /|/g')

  echo "------"
  echo "package is $PACKAGE_NAME"
  echo "current version is $PACKAGE_VERSION"
  echo "latest version in artifactory is $LATEST_RELEASE"
  echo "ArtifactoryVersions: $ARTIFACTORY_VERSIONS"

  if [[ ${PACKAGE_VERSION} =~ ^(${ARTIFACTORY_VERSION_PATTERN})$ ]]; then
    echo "nothing to publish ($PACKAGE_VERSION exists in Artifactory)."
  else
    npm publish --verbose
  fi
}

# Run through all lerna packages and independently publish based on package.version
currentdir=`pwd`
for i in packages/*
do
    if [ -d "$i" -a -f "$i/package.json" ]; then
        cd $i && publish_package
        cd $currentdir
    fi
done
