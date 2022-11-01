import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import './styles.css';

import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import { itemsApi } from 'services/ItemsApi';

export class App extends Component {
  async componentDidMount() {
    const { data } = await itemsApi.fetchItems('get');
    console.log(data);

    await itemsApi
      .fetchItems('get')
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        Notify.failure(e.message);
      });

    // if (!itemsApi.isLastPage()) {
    //   loadMoreRef.classList.remove('is-hidden');
    // } else {
    //   loadMoreRef.classList.add('is-hidden');
    // }
  }

  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}
