import { useEffect, useMemo, useState } from 'react';

import List from 'components/table/Table';
import Chart from 'components/chart/Chart';
import Navbar from 'components/navbar/Navbar';
import Widget from 'components/widget/Widget';
import Sidebar from 'components/sidebar/Sidebar';
import Featured from 'components/featured/Featured';
import { getUserStats } from 'services/userService';

import './home.scss';

const Home = () => {
  const [userStats, setUserStats] = useState([]);
  console.log('Stats : ', userStats)

  const MONTHS = useMemo(() =>
    [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getUserStats();
        data.stats.map((item) =>
          setUserStats((prev) =>
            [...prev, { name: MONTHS[item._id - 1], 'Active User': item.total }]
          ));
      } catch (err) {
        console.log(err);
      }
    })();
  }, [MONTHS]);

  return (
    <div className='home'>
      <Sidebar />
      <div className='home__container'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className='charts'>
          <Featured />
          <Chart data={userStats} aspect={2 / 1} title='Last 6 Months (Revenue)' />
        </div>
        <div className='list-container'>
          <div className='list-title'>Latest transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
