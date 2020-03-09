import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavigationTabsTypes } from './NavigationTabs.props';

/**
 * A variation of the `Tabs` component from the Material UI library (https://material-ui.com/components/tabs/)
 * adapted for ToDo application
 */
class NavigationTabs extends React.Component {

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { activeTabType } = this.props;
    if (activeTabType !== prevProps.activeTabType) {
      if (this.props.onActiveTabUpdated) {
        this.props.onActiveTabUpdated();
      }
    }
  }

  handleChangeTab = (event, value) => {
    if (this.props.onChangeActiveTab) {
      this.props.onChangeActiveTab(value);
    }
  };

  render() {
    const { activeTabType, tabs } = this.props;
    const tabsContent = [];
    for (let i = 0; i < tabs.length; i++){
      tabsContent.push(
        <Tab key={`tabItem${i}`} label={tabs[i].tabLabel} value={tabs[i].tabType} />
      );
    }
    return (
      <Tabs
        value={activeTabType}
        onChange={this.handleChangeTab}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {tabsContent}
      </Tabs>
    );
  }
}

NavigationTabs.propTypes = NavigationTabsTypes;

NavigationTabs.defaultProps = {
  activeTabType: 'all',
  tabs: [
    {tabType: 'all', tabLabel: 'All'},
    {tabType: 'active', tabLabel: 'Active'},
    {tabType: 'completed', tabLabel: 'Completed'},
  ]
};

export default NavigationTabs;
