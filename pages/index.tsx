import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import React from 'react';

import Game from '../models/Game';

interface Props {
  games: Game[];
}

const Home: React.FC<Props> = () => {
  return <div>Home</div>;
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
  // TODO: fetch games of user
  return {
    props: {
      games: [],
    },
  };
});

export default withAuthUser()(Home);
