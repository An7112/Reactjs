const TextareaField = (props) => {
    const { handleChange, label, name, value } = props;
    return (
      <div>
        <label className="text-gray-500 text-sm" htmlFor={name}>{label}</label>
        <textarea onChange={handleChange} name={name} rows="4" className="form-control" value={value}></textarea>
        <br></br>
      </div>
    )
  }
  
  export default TextareaField