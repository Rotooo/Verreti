import React from 'react';

export default function TextPage() {
    const loadUsers = () => {
        fetch('http://localhost:2000/user/users')
        .then(res => res.json())
        .then(data => console.log(data))
    };

    loadUsers();
  return (
    <div>TextPage</div>
  )
}
