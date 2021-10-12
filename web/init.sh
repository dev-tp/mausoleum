if [[ $NODE_ENV == 'production' ]]; then
  yarn build && yarn start
else
  yarn dev
fi
