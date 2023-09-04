import React, { Component } from 'react';
import { Searchbar } from './Searchabr/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import css from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    maxPage: 0,
    loaderOn: false,
    modalOn: false,
  };

  BASE_URL = 'https://pixabay.com/api/';
  API_KEY = '37377775-c77698ffc3675e3ed26b97c68';

  handleSearch = query => {
    this.setState({ loaderOn: true });

    const url = `${this.BASE_URL}?q=${query}&page=${this.page}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data.hits, loaderOn: false });
      });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loaderOn } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery images={images} />
        {loaderOn && <Loader />}
        <Button onClick={this.loadMore} />
      </div>
    );
  }
}
