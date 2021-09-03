import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
`;
export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
    `;
WrapperTabList.tabsRole = 'TabList';
export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: #fff;
    &:focus{
        outline: none;
        box-shadow: 0 0 0 2px rgba(0,0,255,0.5);
    }
    &.is-selected{
        border-top-left-radius:16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom:1px solid white;

    }
`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    border: 1px solid #ccc;
    box-shadow: 0 0 0.3em rgba(0,0,0,0.5);
    padding: 8px;
    margin-top: -5px;
    
    &.is-selected{
        display: block;
    }
`;
WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div` 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;