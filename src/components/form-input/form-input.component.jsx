import './form-input.style.scss'
const FormInput = ({label}, ...otherProps)=> {
    return(
        <div className="group">
        <input className="form-input" {...otherProps}/>
        {label && (<label className={`${otherProps.values.length ? 'shrink':''} form-input-label` }>{label} </label>)}
        
        
        </div>
    )
}

export default FormInput;