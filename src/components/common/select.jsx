import React from "react";

const Select = ({name, label, value, error, onChange, type, options}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select 
                className="form-control"
                value={value}
                onChange={onChange}
                id={name} 
                type={type}
                name={name}
                >
                <option value=""/>
                {options.map(o=>(
                    <option key={o._id} value={o._id}>{o.name}</option>
                ))}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Select;