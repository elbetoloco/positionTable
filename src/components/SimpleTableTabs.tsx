/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export interface TabsProps {
  color: 'red' | 'blue';
  tabsData: Array<object>;
  title: string;
}

const SimpleTableTabs = ({ title, color, tabsData }: TabsProps) => {
  const [openTab, setOpenTab] = React.useState(1);

  const Tab = (tabTitle: string, index: number) => {
    return (
      <li
        key={index}
        className="-mb-px last:mr-0 flex flex-shrink w-32 text-center cursor-pointer"
      >
        <a
          className={
            'text-xs font-bold uppercase px-5 py-2 block leading-normal ' +
            (openTab === index
              ? 'text-white bg-' + color + '-600'
              : 'hover:bg-gray-200 hover:text-black text-' +
                color +
                '-600 bg-gray-100')
          }
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(index);
          }}
          data-toggle="tab"
          role="tablist"
        >
          {tabTitle}
        </a>
      </li>
    );
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="bg-white border-2 rounded shadow-lg max-w-max overflow-ellipsis px-0 pt-2 pb-0">
          <h1 className="font-bold text-base p-3">{title}</h1>
          <ul
            className="flex mb-0 list-none flex-nowrap pt-3 flex-row"
            role="tablist"
          >
            {tabsData.map((tab: any, index: number) => {
              return Tab(tab.title, index + 1);
            })}
          </ul>
          <div className="relative flex flex-col w-full">
            <div className="py-1 flex-auto">
              <div className="tab-content tab-space">
                {tabsData.map((tab: any, index: number) => {
                  return (
                    <div
                      className={openTab === index + 1 ? 'block' : 'hidden'}
                      key={index}
                      id={tab.link}
                    >
                      {tab.content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { SimpleTableTabs };
