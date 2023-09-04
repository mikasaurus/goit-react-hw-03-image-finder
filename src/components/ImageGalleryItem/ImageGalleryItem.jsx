import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    modalOn: false,
  };

  openModal = () => {
    this.setState({ modalOn: true });
  };

  closeModal = () => {
    this.setState({ modalOn: false });
  };

  render() {
    const { image } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.openModal}
        />

        {this.state.modalOn && (
          <div onClick={this.closeModal}>
            <Modal src={image.largeImageURL} alt={image.tags} />
          </div>
        )}
      </li>
    );
  }
}
