import { Link } from 'react-router-dom';
import { BackgroundImage, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}
      />
      <div className='body'>
        <Link to={`shop/${title.toLowerCase()}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
        </Link>
      </div>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;