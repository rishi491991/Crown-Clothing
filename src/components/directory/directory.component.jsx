import './directory.styles.scss'
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = (props) => {
    return(
        <div className="directory-container">
      {props.categories.map( category => {
        return (
          <DirectoryItem key={category.id} category={category} />
        );
      })}
    </div>
    )
}

export default Directory;