import React from 'react';

const VolunteerList = ({deleteEvent, event: { _id, name, email, date, title }}) => {
    return (
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{date}</td>
                <td>{title}</td>
                <td>
                    <i
                    onClick={() => deleteEvent(_id)} 
                className="far fa-trash-alt text-danger ml-4"></i></td>
            </tr>
    );
};

export default VolunteerList;