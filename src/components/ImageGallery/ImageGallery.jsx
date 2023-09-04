import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <ul className={css.ImageGallery}>
        {images.map(img => {
          return <ImageGalleryItem key={img.id} image={img} />;
        })}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};
