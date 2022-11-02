import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import './styles.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import { itemsApi } from 'services/ItemsApi';
import Button from './Button/Button';

export class App extends Component {
  state = { search: '', items: [], showedModal: false, modalImg: '' };

  onClickCard = (imgUrl) => {

  }

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        showedModal: !prevState.showedModal,
      };
    })
  }

  onChangeSearch = async value => {
    itemsApi.resetPage();
    const { data } = await itemsApi.fetchItems(value).catch(e => {
      Notify.failure(e.message);
    });
    this.setState({ items: data.hits });
  };

  loadMore = async () => {
    itemsApi.incrementPage();
    const { data } = await itemsApi.fetchItems().catch(e => {
      Notify.failure(e.message);
    });
    this.setState(prev => ({ items: [...prev.items, ...data.hits] }));
  };

  render() {
    const { items } = this.state;
    console.log(itemsApi)
    const isLastPage = itemsApi?.isLastPage();
    return (
      <div>
        <Searchbar onChangeSearch={this.onChangeSearch} />
        <ImageGallery onClickCard={this.onClickCard} items={items} />
        {!isLastPage && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}
