const InputField = (props) => {
    const { handleChange, label, name, type, value } = props;
    return (
      <div  className="form-group">
        <label className="text-gray-500 text-sm" htmlFor={name}>{label}</label>
        <input  className="form-control" type={type} onChange={handleChange} value={value} name={name} required />
      </div>
    )
  }
  
  export default InputField