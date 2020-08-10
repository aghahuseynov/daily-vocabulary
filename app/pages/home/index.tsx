import React from 'react';

import {
  LeftSidebarWithoutResize,
  Content,
  Main,
  PageLayout,
} from '@atlaskit/page-layout';
import { MenuGroup, Section, ButtonItem } from '@atlaskit/menu';
import Dashboard from '../dashboard';
import { Router, Route } from 'react-router';
import { history } from '../../store';
import routes from '../../constants/routes.json';
import Word from '../word/words';

const Home = () => {
  return (
    <PageLayout>
      <Content>
        {
          <LeftSidebarWithoutResize width={250}>
            <MenuGroup>
              <Section title="Starred">
                <ButtonItem
                  onClick={() => history.push(routes.DASHBOARD)}
                  description="Show Statistic"
                >
                  Dashboard
                </ButtonItem>
                <ButtonItem
                  onClick={() => history.push(routes.TEST)}
                  description="Test with your words!"
                >
                  Test
                </ButtonItem>
              </Section>
              <ButtonItem
                onClick={() => history.push(routes.DESCRIBEWORD)}
                description=""
              >
                Describe Words
              </ButtonItem>
              <ButtonItem
                onClick={() => history.push(routes.PROFILE)}
                description="Show your profile"
              >
                Profile
              </ButtonItem>
              <ButtonItem
                onClick={() => history.push(routes.SETTINGS)}
                description=""
              >
                Settings
              </ButtonItem>
              <Section hasSeparator>
                <ButtonItem>Exit</ButtonItem>
              </Section>
            </MenuGroup>
          </LeftSidebarWithoutResize>
        }
        {
          <Main>
            <div style={{ marginLeft: '2%' }}>
              <Router history={history}>
                <Route exact path={'/'} component={Dashboard} />
                <Route path={'/home/dashboard'} component={Dashboard} />
                <Route path={'/home/word'} component={Word} />
              </Router>
            </div>
          </Main>
        }
      </Content>
    </PageLayout>
  );
};

export default Home;
