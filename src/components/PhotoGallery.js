import React from 'react';
import Photo from './Photo';

class PhotoGallery extends React.Component {
	render() {
		const photos = this.props.photos.map((photo) => {
			return <Photo src={photo.url} caption={photo.caption} />
		});
	return (
		<div className="photo-gallery" >
			{photos}
		</div>
		);
	}
};

export default PhotoGallery;