import './directory.styles.jsx'
import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles.jsx';

const Directory = (props) => {
    return(
        <DirectoryContainer>
      {props.categories.map( category => {
        return (
          <DirectoryItem key={category.id} category={category} />
        );
      })}
    </DirectoryContainer>
    )
}

export default Directory;