#!/bin/bash
# Script to quickly create sub-theme.

echo '
+------------------------------------------------------------------------+
| With this script you could quickly create Gesso sub-theme     |
| In order to use this:                                                  |
| - Gesso theme (this folder) should be in the contrib folder   |
+------------------------------------------------------------------------+
'
echo 'The machine name of your custom theme? [e.g. my_custom_gesso]'
read CUSTOM_GESSO

echo 'Your theme name ? [e.g. My custom gesso theme]'
read CUSTOM_GESSO_NAME

if [[ ! -e ../../custom ]]; then
    mkdir ../../custom
fi
cd ../../custom
cp -r ../contrib/*/example $CUSTOM_GESSO
cd $CUSTOM_GESSO
for file in *example.*; do mv $file ${file//example/$CUSTOM_GESSO}; done
for file in config/*/*example.*; do mv $file ${file//example/$CUSTOM_GESSO}; done

# Remove create_subtheme.sh file, we do not need it in customized subtheme.
rm scripts/create_subtheme.sh

# mv {_,}$CUSTOM_GESSO.theme
grep -Rl example .|xargs sed -i -e "s/example/$CUSTOM_GESSO/"
sed -i -e "s/SASS Bootstrap Starter Kit example/$CUSTOM_GESSO_NAME/" $CUSTOM_GESSO.info.yml
echo "# Check the themes/custom folder for your new sub-theme."